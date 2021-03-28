using DepoiTItems;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DepoiTRepository
{
    public partial class Repository
    {
        public bool GetStorages(IEnumerable<int> id, out IEnumerable<IStorage> storages)
        {
            try
            {
                storages = _storageItemCache.GetOrCreate(_dataStorge.GetStorageTokens(id), _dataStorge.GetStorages);

                return storages != null;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public bool GetStoragesByDepot(int depotId, out IEnumerable<IStorage> storages)
        {
            try
            {
                storages = _storageItemCache.GetOrCreate(_dataStorge.GetStorageTokensByDepot(new[] { depotId }), _dataStorge.GetStorages);

                return storages != null;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public bool SetStorage(IStorage storage, out IStorage createdStorage)
        {
            try
            {
                var itemToken = _dataStorge.SetStorage(storage);
                createdStorage = _storageItemCache.GetOrCreate(new[] { itemToken }, _dataStorge.GetStorages).FirstOrDefault();

                return createdStorage != null;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public bool UpdateStorage(IStorage storage, out IStorage updatedStorage)
        {
            try
            {
                var itemToken = _dataStorge.UpdateStorage(storage);
                updatedStorage = _storageItemCache.GetOrCreate(new[] { itemToken }, _dataStorge.GetStorages).FirstOrDefault();

                return updatedStorage != null;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public bool DropStorage(int id)
        {
            _dataStorge.DropStorage(id);
            return !_dataStorge.GetStorageTokens(new[] { id }).Any();
        }
    }
}
