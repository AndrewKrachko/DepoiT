using System.Collections.Generic;

namespace DepoiTItems
{
    public interface IUserDataStorage
    {
        IEnumerable<string> GetUserTokens(IEnumerable<int> id);
        User GetUserByNameOrByEmail(string name);
        IEnumerable<User> GetUserByToken(IEnumerable<string> tokens);
        string SetUser(User user);
        string UpdateUser(User user);
        void DropUser(int id);

    }
}