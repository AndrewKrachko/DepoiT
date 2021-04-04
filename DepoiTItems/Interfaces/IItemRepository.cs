using System.Collections.Generic;

namespace DepoiTItems
{
    public interface IItemRepository
    {
        bool GetItems(IEnumerable<int> id, out IEnumerable<Item> items);
        bool GetItemsByStorage(int storageId, out IEnumerable<Item> items);
        bool SetItem(Item item, out Item createdItem);
        bool UpdateItem(Item storage, out Item createdItem);
        bool DropItem(int id);
    }
}