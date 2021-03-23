using System;
using System.Collections.Generic;
using System.Text;

namespace DepoiTItems
{
    public class User : IUser
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string UserToken { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public IPhoto Avatar { get; set; }
    }
}
