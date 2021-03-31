using System.Collections.Generic;

namespace DepoiTItems
{
    public interface IItemRepository
    {
        bool GetItems(IEnumerable<int> id, out IEnumerable<IItem> items);
        bool GetItemsByStorage(int storageId, out IEnumerable<IItem> items);
        bool SetItem(IItem item, out IItem createdItem);
        bool UpdateItem(IItem storage, out IItem createdItem);
        bool DropItem(int id);
    }
}