using System.Collections.Generic;

namespace DepoiTItems
{
    public interface IItemDataStorage
    {
        IEnumerable<string> GetItemTokens(IEnumerable<int> id);
        IEnumerable<string> GetItemTokensByStorage(IEnumerable<int> storageId);
        IEnumerable<Item> GetItems(IEnumerable<string> tokens);

        string SetItem(Item item);
        string UpdateItem(Item item);
        void DropItem(int id);
    }
}