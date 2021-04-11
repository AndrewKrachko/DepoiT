using System.Collections.Generic;

namespace DepoiTItems
{
    public interface IUserRepository
    {
        bool GetUsers(IEnumerable<int> id, out IEnumerable<User> users);
        bool GetUserByName(string name, out User user);
        bool GetUserByToken(string userToken, out User user);
        bool SetUser(User user, out User createdUser);
        bool UpdateUser(User user, out User updatedUser);
        bool DropUser(int id);

    }
}