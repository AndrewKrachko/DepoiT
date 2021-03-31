using DepoiTCache;
using DepoiTItems;
using System;
using System.Collections.Generic;

namespace DepoiTRepository
{
    public partial class Repository : IRepository
    {
        private IDataStorage _dataStorage;
        private readonly ItemCache<IDepot> _depotItemCache;
        private readonly ItemCache<IStorage> _storageItemCache;
        private readonly ItemCache<IItem> _itemItemCache;


        public Repository(IDataStorage dataStorage)
        {
            _dataStorage = dataStorage;
            _depotItemCache = new ItemCache<IDepot>();
            _storageItemCache = new ItemCache<IStorage>();
            _itemItemCache = new ItemCache<IItem>();
        }

        public void SetDataStorage(IDataStorage dataStorage)
        {
            _dataStorage = dataStorage;
        }

        public bool GetUserByName(string name, out IUser user)
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

        public bool GetUserByToken(string userToken, out IUser user)
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
