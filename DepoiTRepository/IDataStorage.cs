using DepoiTItems;
using System;
using System.Collections.Generic;
using System.Text;

namespace DepoiTRepository
{
    public interface IDataStorage
    {
        IUser GetUserByName(string name);
        IDepot GetDepot(int id, IUser user);
        IEnumerable<IDepot>  GetDepots(IUser user);
    }
}
