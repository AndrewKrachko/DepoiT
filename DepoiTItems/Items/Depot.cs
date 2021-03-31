using System;
using System.Collections.Generic;

namespace DepoiTItems
{
    public class Depot : IDepot
    {
        public IAddress Adress { get; set; }
        public IGeoCoordinates Coordinates { get; set; }
        public IEnumerable<IStorage> Storages { get; set; }
        public bool IsPublic { get; set; }
        public IUser Owner { get; set; }
        public int Id { get; set; }
        public string Name { get; set; }
        public string ObjectToken { get; set; }

        public override bool Equals(object obj)
        {
            return obj is Depot depot &&
                   EqualityComparer<IAddress>.Default.Equals(Adress, depot.Adress) &&
                   EqualityComparer<IGeoCoordinates>.Default.Equals(Coordinates, depot.Coordinates) &&
                   EqualityComparer<IEnumerable<IStorage>>.Default.Equals(Storages, depot.Storages) &&
                   IsPublic == depot.IsPublic &&
                   EqualityComparer<IUser>.Default.Equals(Owner, depot.Owner) &&
                   Id == depot.Id &&
                   Name == depot.Name &&
                   ObjectToken == depot.ObjectToken;
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(Adress, Coordinates, Storages, IsPublic, Owner, Id, Name, ObjectToken);
        }

        public static bool operator ==(Depot depotA, Depot depotB) => depotA.Equals(depotB);
        public static bool operator !=(Depot depotA, Depot depotB) => !depotA.Equals(depotB);
    }
}
