using System.Collections.Generic;

namespace DepoiTItems
{
    public interface IDepotCore
    {
        bool GetDepot(int id, string userToken, out Depot depot);
        bool GetDepotsByUser(int userId, out IEnumerable<Depot> depots);
        bool SetDepot(Depot depot, out Depot createdDepot);
        bool UpdateDepot(Depot depot, string userToken, out Depot createdDepot);
        bool DropDepot(int id, string userToken);
        bool AddStoragesToDepot(int depotId, string userToken, IEnumerable<Storage> storages);
        bool RemoveStoragesFromDepot(int depotId, string userToken, IEnumerable<Storage> storages);
        bool MoveStoragesBetweenDepots(IEnumerable<int> storageIds, string userToken, int sourceDepot, int recepientDepot);
    }
}