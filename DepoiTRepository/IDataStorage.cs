using DepoiTItems;
using System;
using System.Collections.Generic;
using System.Text;

namespace DepoiTRepository
{
    public interface IDataStorage
    {
        IUser GetUserByName(string name);
    }
}
