using DepoiTItems;
using System.Collections.Generic;

namespace DepoiTCore
{
    public interface ICore
    {
        bool GetDepot(int id, IUser user, out IDepot depot);
        bool GetDepots(IUser user, out IEnumerable<IDepot> depots);
    }
}