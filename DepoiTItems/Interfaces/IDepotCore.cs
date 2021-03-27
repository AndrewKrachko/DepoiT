using System.Collections.Generic;

namespace DepoiTItems
{
    public interface IDepotCore
    {
        bool GetDepot(int id, out IDepot depot);
        bool GetDepotsByUser(int userId, out IEnumerable<IDepot> depots);
        bool SetDepot(IDepot depot, out IDepot createdDepot);
        bool UpdateDepot(IDepot depot, out IDepot createdDepot);
        bool DropDepot(int id);
        bool AddStoragesToDepot(IEnumerable<IStorage> storages);
        bool RemoveStoragesFromDepot(IEnumerable<IStorage> storages);
        bool MoveStoragesBetweenDepots(IEnumerable<int> storageIds, int sourceDepot, int recepientDepot);
    }
}