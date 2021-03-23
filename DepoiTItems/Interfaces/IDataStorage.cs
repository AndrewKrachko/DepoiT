using DepoiTItems;
using System;
using System.Collections.Generic;
using System.Text;

namespace DepoiTItems
{
    public interface IDataStorage
    {
        IUser GetUserByName(string name);
        IDepot GetDepot(int id, string userToken);
        IEnumerable<IDepot>  GetDepots(string userToken);
    }
}
