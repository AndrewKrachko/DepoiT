using DepoiTItems;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DepoiTFakeDataStorage
{
    public class UserDataStorage : IUserDataStorage
    {
        private FakeDataStorage _dataStorage;
        private List<User> _users;
        private readonly List<Depot> _depots;

        public UserDataStorage(FakeDataStorage fakeDataStorage, List<User> users, List<Depot> depots)
        {
            _dataStorage = fakeDataStorage;
            _users = users;
            _depots = depots;
        }
        public IEnumerable<string> GetUserTokens(IEnumerable<int> id) => _users.FindAll(u => id.Contains(u.Id)).Select(u => u.ObjectToken);

        public string SetUser(User user)
        {
            string itemToken = _dataStorage.GenerateToken(_users);

            user.Id = (_depots.Count == 0 ? 0 : _depots.LastOrDefault().Id) + 1;
            user.ObjectToken = itemToken;

            _users.Add((User)user);

            return itemToken;
        }

        public string UpdateUser(User user)
        {
            string itemToken = _dataStorage.GenerateToken(_users);

            var databaseItem = _users.FirstOrDefault(u => u.Id == user.Id);

            if (databaseItem != null)
            {
                if (databaseItem.Name != user.Name) databaseItem.Name = user.Name;
                if (databaseItem.Email != user.Email) databaseItem.Email = user.Email;
                if (databaseItem.Avatar != user.Avatar) databaseItem.Avatar = user.Avatar;
                if (databaseItem.PasswordHash != user.PasswordHash) databaseItem.PasswordHash = user.PasswordHash;
                databaseItem.ObjectToken = itemToken;
            }

            return itemToken;
        }

        public void DropUser(int id)
        {
            throw new System.NotImplementedException();
        }
        public User GetUserByNameOrByEmail(string name) => _users.FirstOrDefault(u => u.Name.ToUpper() == name.ToUpper() || u.Email.ToUpper() == name.ToUpper());

        public IEnumerable<User> GetUserByToken(IEnumerable<string> tokens) => _users.FindAll(u => tokens.Contains(u.UserToken));

    }
}
