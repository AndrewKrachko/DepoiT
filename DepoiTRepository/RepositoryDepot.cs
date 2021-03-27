using DepoiTItems;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DepoiTRepository
{
    public partial class Repository
    {
        public bool GetDepots(IEnumerable<int> id, out IEnumerable<IDepot> depot)
        {
            try
            {
                var depotTokens = _dataStorge.GetDepotTokens(id);
                depot = _dataStorge.GetDepots(depotTokens);

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

        public bool GetDepotsByUser(int userId, out IEnumerable<IDepot> depots)
        {
            try
            {
                var depotTokens = _dataStorge.GetDepotTokensByUser(new[] { userId });
                depots = _dataStorge.GetDepots(depotTokens);

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
                var itemToken = _dataStorge.SetDepot(depot);
                createdDepot = _dataStorge.GetDepots(new[] { itemToken }).FirstOrDefault();

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
