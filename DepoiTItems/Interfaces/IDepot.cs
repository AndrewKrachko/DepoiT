using System;
using System.Collections.Generic;
using System.Text;

namespace DepoiTItems
{
    public interface IDepot : IObject
    {
        Address Adress { get; set; }
        GeoCoordinates Coordinates { get; set; }
        List<Storage> Storages { get; set; }
        bool IsPublic { get; set; }
        User Owner { get; set; }
    }
}
