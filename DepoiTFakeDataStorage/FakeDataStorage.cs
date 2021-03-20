using DepoiTItems;
using DepoiTRepository;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DepoiTFakeDataStorage
{
    public class FakeDataStorage : IDataStorage
    {
        private List<User> _users;

        private List<Address> _addresses;

        private List<Depot> _depots;

        public FakeDataStorage()
        {
            _users = new List<User>()
            {
                new User() { Id=0, Name="admin", Password = "123", Email="admin@mail.com" },
                new User() { Id=1, Name="user", Password = "321", Email="user@mail.com" }
            };

            _addresses = new List<Address>()
            {
                new Address() { Id = 0 },
                new Address() { Id = 1, Street = "P. Brovki str." },
                new Address() { Id = 2, Street = "Odoevskogo" },
            };

            _depots = new List<Depot>
            {
                new Depot() {Id = 0, Name = "Default depot", Adress = _addresses[0], Owner = _users[0], IsPublic = false},
                new Depot() {Id = 1, Name = "User depot 1", Adress = _addresses[1], Owner = _users[1], IsPublic = false},
                new Depot() {Id = 2, Name = "User depot 2", Adress = _addresses[2], Owner = _users[1], IsPublic = false},
            };
        }

        public IDepot GetDepot(int id, IUser user)
        {
            return _depots.FirstOrDefault(d => d.Owner == user && d.Id == id);
        }

        public IEnumerable<IDepot> GetDepots(IUser user)
        {
            return _depots.FindAll(d => d.Owner == user); 
        }

        public IUser GetUserByName(string name)
        {
            return _users.FirstOrDefault(u => u.Name == name);
        }
    }
}
