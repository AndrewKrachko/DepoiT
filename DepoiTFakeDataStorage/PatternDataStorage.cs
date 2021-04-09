using DepoiTItems;
using System.Collections.Generic;

namespace DepoiTFakeDataStorage
{
    internal class PatternDataStorage : IPatternDataStorage
    {
        private readonly IEnumerable<Pattern> _patterns;
        private readonly IEnumerable<Item> _items;

        public PatternDataStorage(IEnumerable<Pattern> patterns, IEnumerable<Item> items)
        {
            _patterns = patterns;
            _items = items;
        }

        public void DropPattern(int id)
        {
            throw new System.NotImplementedException();
        }

        public IEnumerable<Pattern> GetPatterns(IEnumerable<string> tokens)
        {
            throw new System.NotImplementedException();
        }

        public string GetPatternTokenByItem(IEnumerable<int> itemId)
        {
            throw new System.NotImplementedException();
        }

        public IEnumerable<string> GetPatternTokens(IEnumerable<int> id)
        {
            throw new System.NotImplementedException();
        }

        public string SetPattern(Pattern patern)
        {
            throw new System.NotImplementedException();
        }

        public string UpdatePattern(Pattern patern)
        {
            throw new System.NotImplementedException();
        }
    }
}