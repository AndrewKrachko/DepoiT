using DepoiTCache;
using DepoiTItems;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DepoiTRepository
{
    internal class UserRepository : IUserRepository
    {
        private readonly ItemCache<User> _itemCache;
        private readonly IUserDataStorage _dataStorage;

        public UserRepository(IUserDataStorage dataStorage)
        {
            _itemCache = new ItemCache<User>();
            _dataStorage = dataStorage;
        }

        public bool DropUser(int id)
        {
            _dataStorage.DropUser(id);
            return !_dataStorage.GetUserTokens(new[] { id }).Any();
        }

        public bool GetUserByName(string name, out User user)
        {
            try
            {
                user = _dataStorage.GetUserByNameOrByEmail(name);

                if (user != null)
                {
                    return true;
                }

                return false;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public bool GetUserByToken(string userToken, out User user)
        {
            try
            {
                user = _dataStorage.GetUserByToken(new[] { userToken }).FirstOrDefault();

                if (user != null)
                {
                    return true;
                }

                return false;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public bool GetUsers(IEnumerable<int> id, out IEnumerable<User> users)
        {
            try
            {
                users = _itemCache.GetOrCreate(_dataStorage.GetUserTokens(id), _dataStorage.GetUserByToken);

                return users != null;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public bool SetUser(User user, out User createdUser)
        {
            try
            {
                var itemToken = _dataStorage.SetUser(user);
                createdUser = _itemCache.GetOrCreate(new[] { itemToken }, _dataStorage.GetUserByToken).FirstOrDefault();

                return createdUser != null;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public bool UpdateUser(User user, out User updatedUser)
        {
            try
            {
                var itemToken = _dataStorage.UpdateUser(user);
                updatedUser = _itemCache.GetOrCreate(new[] { itemToken }, _dataStorage.GetUserByToken).FirstOrDefault();

                return updatedUser != null;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}