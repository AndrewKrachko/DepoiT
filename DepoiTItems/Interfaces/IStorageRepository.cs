using System.Collections.Generic;

namespace DepoiTItems
{
    public interface IStorageRepository
    {
        bool GetStorages(IEnumerable<int> id, out IEnumerable<IStorage> storages);
        bool GetStoragesByDepot(int depotId, out IEnumerable<IStorage> storages);
        bool SetStorage(IStorage storage, out IStorage createdStorage);
        bool UpdateStorage(IStorage storage, out IStorage createdStorage);
        bool DropStorage(int id);
    }
}