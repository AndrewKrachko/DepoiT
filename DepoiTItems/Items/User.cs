using System;
using System.Collections.Generic;

namespace DepoiTItems
{
    public class User : DepoiTObject, IUser
    {
        public string UserToken { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public Photo Avatar { get; set; }

        public override bool Equals(object obj)
        {
            return obj is User user
                && base.Equals(user)
                && UserToken == user.UserToken
                && Email == user.Email
                && Password == user.Password
                && EqualityComparer<Photo>.Default.Equals(Avatar, user.Avatar);
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(Id, Name, UserToken, Email, Password, Avatar, ObjectToken);
        }

        public static bool operator ==(User userA, User userB) => userA is User && userB is User && userA.Equals(userB);
        public static bool operator !=(User userA, User userB) => userA is User && userB is null
            || userA is null && userB is User
            || userA is User && userB is User && !userA.Equals(userB);
    }
}
