using System.Collections.Generic;

namespace DepoiTItems
{
    public interface IItemCore
    {
        bool GetItem(int id, out Item item);
        bool GetItemsByStorage(int storageId, out IEnumerable<Item> items);
        bool SetItem(int storageId, Item item, out Item createdItem);
        bool UpdateItem(Item item, out Item updatedItem);
        bool DropItem(int id);
    }
}