using System.Collections.Generic;

namespace DepoiTItems
{
    public interface IItemCore
    {
        bool GetItem(int id, out IItem item);
        bool GetItemsByStorage(int storageId, out IEnumerable<IItem> items);
        bool SetItem(int storageId, IItem item, out IItem createdItem);
        bool UpdateItem(IItem item, out IItem updatedItem);
        bool DropItem(int id);
    }
}