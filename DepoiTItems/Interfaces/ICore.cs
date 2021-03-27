using System;
using System.Collections.Generic;
using System.Text;

namespace DepoiTItems
{
    public interface ICore
    {
        bool GetDepot(int id, out IDepot depot);
        bool GetDepotsByUser(int userId, out IEnumerable<IDepot> depots);
        bool SetDepot(IDepot depot, out IDepot createdDepot);
        bool DropDepot(int id);
    }
}
