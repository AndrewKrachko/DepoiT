using DepoiTItems;
using System;
using System.Collections.Generic;
using System.Text;

namespace DepoiTItems
{
    public interface IDataStorage : IDepotDataStorage, IStorageDataStorage, IItemDataStorage
    {
        User GetUserByName(string name);
        User GetUserByToken(string userToken);
    }
}
