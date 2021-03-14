using System;
using System.Collections.Generic;
using System.Text;

namespace DepoiTItems.Interfaces
{
    public interface IRepository
    {
        IUser GetUserByName(string name);

    }
}
