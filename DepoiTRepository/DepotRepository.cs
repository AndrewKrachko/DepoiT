using DepoiTItems;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DepoiTRepository
{
    public partial class Repository
    {
        public bool DropDepot(int id)
        {
            _dataStorage.DropDepot(id);
            return !_dataStorage.GetDepotTokens(new[] { id }).Any();
        }

        public bool GetDepots(IEnumerable<int> id, out IEnumerable<IDepot> depots)
        {
            try
            {
                depots = _depotItemCache.GetOrCreate(_dataStorage.GetDepotTokens(id), _dataStorage.GetDepots);

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
                depots = _depotItemCache.GetOrCreate(_dataStorage.GetDepotTokensByUser(new[] { userId }), _dataStorage.GetDepots);

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
                var itemToken = _dataStorage.SetDepot(depot);
                createdDepot = _depotItemCache.GetOrCreate(new[] { itemToken }, _dataStorage.GetDepots).FirstOrDefault();

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
                var itemToken = _dataStorage.UpdateDepot(depot);
                updatedDepot = _depotItemCache.GetOrCreate(new[] { itemToken }, _dataStorage.GetDepots).FirstOrDefault();

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
                updatedDepot = _dataStorage.GetDepots(new[] { _dataStorage.AddStogaresToDepot(depotId, storages) }).FirstOrDefault();

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
                updatedDepot = _dataStorage.GetDepots(new[] { _dataStorage.RemoveStoragesFromDepot(depotId, storages.Select(s => s.Id)) }).FirstOrDefault();

                return updatedDepot.Storages.Intersect(storages).Count() == 0;
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
                var updateDepots = _dataStorage.GetDepots(_dataStorage.MoveStoragesBetweenDepots(storageIds, sourceDepot, recepientDepot));

                return updateDepots.FirstOrDefault(d => d.Id == sourceDepot).Storages.Count(s => storageIds.Contains(s.Id)) == 0 &&
                    updateDepots.FirstOrDefault(d => d.Id == recepientDepot).Storages.Count(s => storageIds.Contains(s.Id)) == storageIds.Count();
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }
    }
}
