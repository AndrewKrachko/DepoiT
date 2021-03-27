using System.Collections.Generic;

namespace DepoiTItems
{
    public interface IDepotRepository
    {
        bool GetDepots(IEnumerable<int> id, out IEnumerable<IDepot> depot);
        bool GetDepotsByUser(int userId, out IEnumerable<IDepot> depots);
        bool SetDepot(IDepot depot, out IDepot createdDepot);
        bool UpdateDepot(int id, IDepot depot, out IDepot updatedDepot);
        bool DropDepot(int id);
    }
}