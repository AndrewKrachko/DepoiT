﻿using System;
using System.Collections.Generic;
using System.Text;

namespace DepoiTItems
{
    public interface IRepository
    {
        bool GetUserByName(string name, out IUser user);

    }
}
