﻿using DepoiTItems;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DepoiTRepository
{
    public partial class Repository
    {
        public bool DropDepot(int id)
        {
            _dataStorge.DropDepot(id);
            return !_dataStorge.GetDepotTokens(new[] { id }).Any();
        }

        public bool GetDepots(IEnumerable<int> id, out IEnumerable<IDepot> depots)
        {
            try
            {
                depots = _depotItemCache.GetOrCreate(_dataStorge.GetDepotTokens(id), _dataStorge.GetDepots);

                return depots != null;
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
                depots = _depotItemCache.GetOrCreate(_dataStorge.GetDepotTokensByUser(new[] { userId }), _dataStorge.GetDepots);

                return depots != null;
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

                var itemToken = _dataStorge.SetDepot(depot);
                createdDepot = _depotItemCache.GetOrCreate(new[] { itemToken }, _dataStorge.GetDepots).FirstOrDefault();

                return createdDepot != null;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public bool UpdateDepot(IDepot depot, out IDepot updatedDepot)
        {
            try
            {
                var itemToken = _dataStorge.UpdateDepot(depot);
                updatedDepot = _dataStorge.GetDepots(new[] { itemToken }).FirstOrDefault();

                return updatedDepot != null;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public bool AddStoragesToDepot(int depotId, IEnumerable<IStorage> storages, out IDepot updatedDepot)
        {
            try
            {
                updatedDepot = _dataStorge.GetDepots(new[] { _dataStorge.AddStogaresToDepot(depotId, storages) }).FirstOrDefault();

                return updatedDepot.Storages.Intersect(storages).Count() == storages.Count();
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

        public bool RemoveStoragesFromDepot(int depotId, IEnumerable<IStorage> storages, out IDepot updatedDepot)
        {
            try
            {
                throw new NotImplementedException();
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

        public bool MoveStoragesBetweenDepots(IEnumerable<int> storageIds, int sourceDepot, int recepientDepot)
        {
            try
            {
                throw new NotImplementedException();
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }
    }
}
