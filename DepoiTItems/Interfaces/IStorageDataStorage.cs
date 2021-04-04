using System.Collections.Generic;

namespace DepoiTItems
{
    public interface IStorageDataStorage
    {
        IEnumerable<string> GetStorageTokens(IEnumerable<int> id);
        IEnumerable<string> GetStorageTokensByDepot(IEnumerable<int> depotId);
        IEnumerable<Storage> GetStorages(IEnumerable<string> tokens);

        string SetStorage(Storage storage);
        string UpdateStorage(Storage storage);
        void DropStorage(int id);

        string AddItemsToStorage(int storageId, IEnumerable<Item> items);
        string RemoveItemsFromStorage(int storageId, IEnumerable<int> itemsIds);
        string[] MoveItemsBetweenStorages(IEnumerable<int> itemsIds, int sourceStorage, int recepientStorage);
    }
}