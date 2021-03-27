using DepoiTCache;
using DepoiTItems;
using System;
using System.Collections.Generic;

namespace DepoiTRepository
{
    public partial class Repository : IRepository
    {
        private IDataStorage _dataStorge;
        private ItemCache<IDepot> _depotItemCache;


        public Repository(IDataStorage dataStorage)
        {
            _dataStorge = dataStorage;
            _depotItemCache = new ItemCache<IDepot>();
        }

        public void SetDataStorage(IDataStorage dataStorage)
        {
            _dataStorge = dataStorage;
        }

        public bool GetUserByName(string name, out IUser user)
        {
            try
            {
                user = _dataStorge.GetUserByName(name);

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
                user = _dataStorge.GetUserByToken(userToken);

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
