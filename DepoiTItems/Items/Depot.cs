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
    }
}
