using System;
using System.Collections.Generic;
using System.Text;

namespace DepoiTItems
{
    public interface IRepository
    {
        bool GetUserByName(string name, out IUser user);
        bool GetDepot(int id, IUser user, out IDepot depot);
        bool GetDepots(IUser user, out IEnumerable<IDepot> depots);

    }
}
