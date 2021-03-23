using System;
using System.Collections.Generic;
using System.Text;

namespace DepoiTItems
{
    public interface IRepository
    {
        void SetDataStorage(IDataStorage dataStorage);
        bool GetUserByName(string name, out IUser user);
        bool GetDepot(int id, string userToken, out IDepot depot);
        bool GetDepots(string userToken, out IEnumerable<IDepot> depots);

    }
}
