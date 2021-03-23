using DepoiTItems;
using System;
using System.Collections.Generic;

namespace DepoiTRepository
{
    public partial class Repository : IRepository
    {
        public bool GetDepot(int id, string userToken, out IDepot depot)
        {
            try
            {
                depot = _dataStorge.GetDepot(id, userToken);

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

        public bool GetDepots(string userToken, out IEnumerable<IDepot> depots)
        {
            try
            {
                depots = _dataStorge.GetDepots(userToken);

                if (depots != null)
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

        public bool SetDepot(IDepot depot, out IDepot createdDepot)
        {
            try
            {
                var userToken = depot.Owner.UserToken;
                depot.Owner = _dataStorge.GetUserByToken(userToken);
                var id = _dataStorge.SetDepot(depot);
                createdDepot = _dataStorge.GetDepot(id, userToken);

                if (createdDepot != null)
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
