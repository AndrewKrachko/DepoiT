using DepoiTItems;
using DepoiTRepository;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DepoiTFakeDataStorage
{
    public class FakeDataStorage : IDataStorage
    {
        private List<User> _users = new List<User>() {
            new User() { Id=0, Name="admin", Password = "123", Email="admin@mail.com" },
            new User() { Id=1, Name="user", Password = "321", Email="user@mail.com" }
        };

        public IUser GetUserByName(string name)
        {
            return _users.FirstOrDefault(u => u.Name == name);
        }
    }
}
