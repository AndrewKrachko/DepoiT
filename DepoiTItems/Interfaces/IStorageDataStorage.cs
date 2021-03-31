using System.Collections.Generic;

namespace DepoiTItems
{
    public interface IStorageDataStorage
    {
        IEnumerable<string> GetStorageTokens(IEnumerable<int> id);
        IEnumerable<string> GetStorageTokensByDepot(IEnumerable<int> depotId);
        IEnumerable<IStorage> GetStorages(IEnumerable<string> tokens);

        string SetStorage(IStorage storage);
        string UpdateStorage(IStorage storage);
        void DropStorage(int id);

        string AddItemsToStorage(int storageId, IEnumerable<IItem> items);
        string RemoveItemsFromStorage(int storageId, IEnumerable<int> itemsIds);
        string[] MoveItemsBetweenStorages(IEnumerable<int> itemsIds, int sourceStorage, int recepientStorage);
    }
}