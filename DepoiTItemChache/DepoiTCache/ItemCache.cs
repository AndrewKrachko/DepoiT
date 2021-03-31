using DepoiTItems;
using Microsoft.Extensions.Caching.Memory;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DepoiTCache
{
    public class ItemCache<T> where T : IObject
    {
        private readonly double _timeSpanMinutes;
        private readonly MemoryCache _cache;

        public ItemCache(long sizeLimit = 1024, double timeSpanMinutes = 10)
        {
            _cache = new MemoryCache(new MemoryCacheOptions() { SizeLimit = sizeLimit, });
            _timeSpanMinutes = timeSpanMinutes;
        }

        public IEnumerable<T> GetOrCreate(IEnumerable<string> tokenSet, Func<IEnumerable<string>, IEnumerable<T>> createItem)
        {
            var result = new List<T>();

            if (tokenSet != null)
            {
                var requiredTokens = tokenSet.ToList();

                for (int i = requiredTokens.Count() - 1; i >= 0; i--)
                {
                    if (_cache.TryGetValue(requiredTokens[i], out T item))
                    {
                        result.Add(item);
                        requiredTokens.RemoveAt(i);
                    }
                }

                if (requiredTokens.Count != 0)
                {
                    var newSet = createItem(requiredTokens);
                    result.AddRange(newSet);
                    Set(newSet);
                }
            }

            return result;
        }

        public void Set(IEnumerable<T> items)
        {
            var cacheEntryOptions = new MemoryCacheEntryOptions().SetSize(1).SetPriority(CacheItemPriority.High).SetSlidingExpiration(TimeSpan.FromMinutes(_timeSpanMinutes));

            foreach (var item in items)
            {
                if (!_cache.TryGetValue(item.ObjectToken, out T _))
                {
                    _cache.Set(item.ObjectToken, item, cacheEntryOptions);
                }
            }
        }

        public void Remove(IEnumerable<string> tokenSet)
        {
            foreach (var token in tokenSet)
            {
                if (_cache.TryGetValue(token, out T _))
                {
                    _cache.Remove(token);
                }
            }
        }
    }
}
