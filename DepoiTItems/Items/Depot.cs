using System;
using System.Collections.Generic;
using System.Linq;

namespace DepoiTItems
{
    public class Depot : DepoiTObject, IDepot
    {
        public Address Adress { get; set; }
        public GeoCoordinates Coordinates { get; set; }
        public List<Storage> Storages { get; set; }
        public bool IsPublic { get; set; }
        public User Owner { get; set; }

        public override bool Equals(object obj)
        {
            return obj is Depot depot
                && base.Equals(depot)
                && EqualityComparer<Address>.Default.Equals(Adress, depot.Adress)
                && EqualityComparer<GeoCoordinates>.Default.Equals(Coordinates, depot.Coordinates)
                && ((Storages == null && depot.Storages == null) || (Storages != null && depot.Storages != null && Storages.SequenceEqual(depot.Storages)))
                && IsPublic == depot.IsPublic
                && EqualityComparer<User>.Default.Equals(Owner, depot.Owner);
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(base.GetHashCode(), Adress, Coordinates, Storages, IsPublic, Owner);
        }

        public static bool operator ==(Depot objectA, Depot objectB) => objectA is Depot && objectB is Depot && objectA.Equals(objectB);
        public static bool operator !=(Depot objectA, Depot objectB) => objectA is Depot && objectB is null
            || objectA is null && objectB is Depot
            || objectA is Depot && objectB is Depot && !objectA.Equals(objectB);
    }
}
