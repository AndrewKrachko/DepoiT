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
        public string ObjectToken { get; set; }

        public override bool Equals(object obj)
        {
            return obj is User user &&
                   Id == user.Id &&
                   Name == user.Name &&
                   UserToken == user.UserToken &&
                   Email == user.Email &&
                   Password == user.Password &&
                   EqualityComparer<IPhoto>.Default.Equals(Avatar, user.Avatar) &&
                   ObjectToken == user.ObjectToken;
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(Id, Name, UserToken, Email, Password, Avatar, ObjectToken);
        }

        public static bool operator ==(User userA, User userB) => userA.Equals(userB);
        public static bool operator !=(User userA, User userB) => userA.Equals(userB);
    }
}
