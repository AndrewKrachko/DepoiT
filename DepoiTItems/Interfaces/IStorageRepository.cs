using System.Collections.Generic;

namespace DepoiTItems
{
    public interface IStorageRepository
    {
        bool GetStorages(IEnumerable<int> id, out IEnumerable<Storage> storages);
        bool GetStoragesByDepot(int depotId, out IEnumerable<Storage> storages);
        bool SetStorage(Storage storage, out Storage createdStorage);
        bool UpdateStorage(Storage storage, out Storage createdStorage);
        bool DropStorage(int id);
        bool AddItemsToStorage(int storageId, IEnumerable<Item> items, out Storage updatedStorage);
        bool RemoveItemsFromStorage(int storageId, IEnumerable<Item> items, out Storage updatedStorage);
        bool MoveItemsBetweenStorages(IEnumerable<int> itemIds, int sourceStorage, int recepientStorage);
    }
}