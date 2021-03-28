using System.Collections.Generic;

namespace DepoiTItems
{
    public interface IStorageCore
    {
        bool GetStorage(int id, out IStorage storage);
        bool GetStoragesByDepot(int depotId, out IEnumerable<IStorage> storages);
        bool SetStorage(int depotId, IStorage storage, out IStorage createdStorage);
        bool UpdateStorage(IStorage storage, out IStorage updatedStorage);
        bool DropStorage(int id);
    }
}