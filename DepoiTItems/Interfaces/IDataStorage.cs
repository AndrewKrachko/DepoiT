using DepoiTItems;
using System;
using System.Collections.Generic;
using System.Text;

namespace DepoiTItems
{
    public interface IDataStorage : IDepotDataStorage, IStorageDataStorage, IItemDataStorage
    {
        IUser GetUserByName(string name);
        IUser GetUserByToken(string userToken);
    }
}
