using DepoiTItems;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DepoiTRepository
{
    public partial class Repository
    {
        public bool GetItems(IEnumerable<int> id, out IEnumerable<IItem> items)
        {
            try
            {
                items = _itemItemCache.GetOrCreate(_dataStorage.GetItemTokens(id), _dataStorage.GetItems);

                return items != null;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public bool GetItemsByStorage(int storageId, out IEnumerable<IItem> items)
        {
            try
            {
                items = _itemItemCache.GetOrCreate(_dataStorage.GetItemTokensByStorage(new[] { storageId }), _dataStorage.GetItems);

                return items != null;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public bool SetItem(IItem item, out IItem createdItem)
        {
            try
            {
                var itemToken = _dataStorage.SetItem(item);
                createdItem = _itemItemCache.GetOrCreate(new[] { itemToken }, _dataStorage.GetItems).FirstOrDefault();

                return createdItem != null;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public bool UpdateItem(IItem item, out IItem updatedItem)
        {
            try
            {
                var itemToken = _dataStorage.UpdateItem(item);
                updatedItem = _itemItemCache.GetOrCreate(new[] { itemToken }, _dataStorage.GetItems).FirstOrDefault();

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
