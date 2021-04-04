using DepoiTCache;
using DepoiTItems;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DepoiTRepository
{
    public class ItemRepository : IItemRepository
    {
        private readonly ItemCache<Item> _itemCache;
        private readonly IItemDataStorage _dataStorage;

        public ItemRepository(IItemDataStorage dataStorage)
        {
            _itemCache = new ItemCache<Item>();
            _dataStorage = dataStorage;
        }

        public bool GetItems(IEnumerable<int> id, out IEnumerable<Item> items)
        {
            try
            {
                items = _itemCache.GetOrCreate(_dataStorage.GetItemTokens(id), _dataStorage.GetItems);

                return items != null;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public bool GetItemsByStorage(int storageId, out IEnumerable<Item> items)
        {
            try
            {
                items = _itemCache.GetOrCreate(_dataStorage.GetItemTokensByStorage(new[] { storageId }), _dataStorage.GetItems);

                return items != null;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public bool SetItem(Item item, out Item createdItem)
        {
            try
            {
                var itemToken = _dataStorage.SetItem(item);
                createdItem = _itemCache.GetOrCreate(new[] { itemToken }, _dataStorage.GetItems).FirstOrDefault();

                return createdItem != null;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public bool UpdateItem(Item item, out Item updatedItem)
        {
            try
            {
                var itemToken = _dataStorage.UpdateItem(item);
                updatedItem = _itemCache.GetOrCreate(new[] { itemToken }, _dataStorage.GetItems).FirstOrDefault();

                return updatedItem != null;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public bool DropItem(int id)
        {
            _dataStorage.DropItem(id);
            return !_dataStorage.GetItemTokens(new[] { id }).Any();
        }
    }
}
