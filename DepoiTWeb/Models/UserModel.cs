using DepoiTItems;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DepoiTWeb
{
    public class UserModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }

        public IUser GetUser() => new User() { Id = Id, Name = Name, Email = Email };
    }
}
