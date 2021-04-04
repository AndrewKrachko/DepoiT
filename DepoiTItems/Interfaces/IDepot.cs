using System.Collections.Generic;

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
