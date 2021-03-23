using System;
using System.Collections.Generic;
using System.Text;

namespace DepoiTItems
{
    public interface IRepository : IDepotRepository, IUserRepository
    {
        void SetDataStorage(IDataStorage dataStorage);

    }
}
