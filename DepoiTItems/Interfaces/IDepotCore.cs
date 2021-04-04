using System.Collections.Generic;

namespace DepoiTItems
{
    public interface IDepotCore
    {
        bool GetDepot(int id, out Depot depot);
        bool GetDepotsByUser(int userId, out IEnumerable<Depot> depots);
        bool SetDepot(Depot depot, out Depot createdDepot);
        bool UpdateDepot(Depot depot, out Depot createdDepot);
        bool DropDepot(int id);
        bool AddStoragesToDepot(int depotId, IEnumerable<Storage> storages);
        bool RemoveStoragesFromDepot(int depotId, IEnumerable<Storage> storages);
        bool MoveStoragesBetweenDepots(IEnumerable<int> storageIds, int sourceDepot, int recepientDepot);
    }
}