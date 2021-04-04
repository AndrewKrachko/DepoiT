using System.Collections.Generic;

namespace DepoiTItems
{
    public interface IStorageCore
    {
        bool GetStorage(int id, out Storage storage);
        bool GetStoragesByDepot(int depotId, out IEnumerable<Storage> storages);
        bool SetStorage(int depotId, Storage storage, out Storage createdStorage);
        bool UpdateStorage(Storage storage, out Storage updatedStorage);
        bool DropStorage(int id);
    }
}