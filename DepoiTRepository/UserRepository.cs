using DepoiTCache;
using DepoiTItems;
using System;

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

        public bool GetUserByName(string name, out User user)
        {
            try
            {
                user = _dataStorage.GetUserByName(name);

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
                user = _dataStorage.GetUserByToken(userToken);

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
    }
}