using System.Collections.Generic;

namespace DepoiTItems
{
    public interface IItemDataStorage
    {
        IEnumerable<string> GetItemTokens(IEnumerable<int> id);
        IEnumerable<string> GetItemTokensByStorage(IEnumerable<int> storageId);
        IEnumerable<IItem> GetItems(IEnumerable<string> tokens);

        string SetItem(IItem item);
        string UpdateItem(IItem item);
        void DropItem(int id);
    }
}