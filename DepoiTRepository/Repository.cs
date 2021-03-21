using DepoiTItems;
using System;
using System.Collections.Generic;

namespace DepoiTRepository
{
    public class Repository : IRepository
    {
        private IDataStorage _dataStorge;

        public Repository(IDataStorage dataStorage)
        {
            _dataStorge = dataStorage;
        }

        public void SetDataStorage(IDataStorage dataStorage)
        {
            _dataStorge = dataStorage;
        }

        public bool GetDepot(int id, IUser user, out IDepot depot)
        {
            try
            {
                depot = _dataStorge.GetDepot(id, user);

                if (depot != null)
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

        public bool GetDepots(IUser user, out IEnumerable<IDepot> depots)
        {
            throw new NotImplementedException();
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
    }
}
