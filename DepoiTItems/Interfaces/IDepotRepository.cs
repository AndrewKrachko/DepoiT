using System.Collections.Generic;

namespace DepoiTItems
{
    public interface IDepotRepository
    {
        bool GetDepots(IEnumerable<int> id, out IEnumerable<Depot> depots);
        bool GetDepotsByUser(int userId, out IEnumerable<Depot> depots);
        bool SetDepot(Depot depot, out Depot createdDepot);
        bool UpdateDepot(Depot depot, out Depot updatedDepot);
        bool DropDepot(int id);
        bool AddStoragesToDepot(int depotId, IEnumerable<Storage> storages, out Depot updatedDepot);
        bool RemoveStoragesFromDepot(int depotId, IEnumerable<Storage> storages, out Depot updatedDepot);
        bool MoveStoragesBetweenDepots(IEnumerable<int> storageIds, int sourceDepot, int recepientDepot);
    }
}