using DepoiTCache;
using DepoiTItems;
using System;
using System.Collections.Generic;

namespace DepoiTRepository
{
    public partial class Repository : IRepository
    {
        private IDataStorage _dataStorage;
        private readonly ItemCache<Depot> _depotItemCache;
        private readonly ItemCache<Storage> _storageItemCache;
        private readonly ItemCache<Item> _itemItemCache;


        public Repository(IDataStorage dataStorage)
        {
            _dataStorage = dataStorage;
            _depotItemCache = new ItemCache<Depot>();
            _storageItemCache = new ItemCache<Storage>();
            _itemItemCache = new ItemCache<Item>();
        }

        public void SetDataStorage(IDataStorage dataStorage)
        {
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
