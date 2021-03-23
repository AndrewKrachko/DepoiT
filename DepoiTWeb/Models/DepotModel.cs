using DepoiTItems;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DepoiTWeb
{
    public class DepotModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public IAddress Adress { get; set; }
        public IGeoCoordinates Coordinates { get; set; }
        public IEnumerable<IStorage> Storages { get; set; }
        public bool IsPublic { get; set; }
        public UserModel Owner { get; set; }

        public IDepot GetDepot() => new Depot() { 
            Id = Id, 
            Name = Name, 
            Adress = Adress, 
            Coordinates = Coordinates, 
            Storages = Storages, 
            IsPublic = IsPublic, 
            Owner = Owner.GetUser() };
    }
}
