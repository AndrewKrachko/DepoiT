using DepoiTItems;
using System;
using System.Collections.Generic;
using System.Text;

namespace DepoiTItems
{
    public interface IDataStorage
    {
        IUser GetUserByName(string name);
        IUser GetUserByToken(string userToken);
        IDepot GetDepot(int id, string userToken);
        IEnumerable<IDepot>  GetDepots(string userToken);
        int SetDepot(IDepot depot);
    }
}
