using System;
using System.Collections.Generic;
using System.Text;

namespace DepoiTItems
{
    public interface IDepot : IItem
    {
        IAddress Adress { get; set; }
        IGeoCoordinates Coordinates { get; set; }
        IEnumerable<IStorage> Storages { get; set; }
        bool IsPublic { get; set; }
        IUser Owner { get; set; }
    }
}
