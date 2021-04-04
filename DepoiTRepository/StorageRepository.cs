using DepoiTCache;
using DepoiTItems;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DepoiTRepository
{
    public class StorageRepository : IStorageRepository
    {
        private readonly ItemCache<Storage> _itemCache;
        private readonly IStorageDataStorage _dataStorage;

        public StorageRepository(IStorageDataStorage dataStorage)
        {
            _itemCache = new ItemCache<Storage>();
            _dataStorage = dataStorage;
        }

        public bool GetStorages(IEnumerable<int> id, out IEnumerable<Storage> storages)
        {
            try
            {
                storages = _itemCache.GetOrCreate(_dataStorage.GetStorageTokens(id), _dataStorage.GetStorages);

                return storages != null;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public bool GetStoragesByDepot(int depotId, out IEnumerable<Storage> storages)
        {
            try
            {
                storages = _itemCache.GetOrCreate(_dataStorage.GetStorageTokensByDepot(new[] { depotId }), _dataStorage.GetStorages);

                return storages != null;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public bool SetStorage(Storage storage, out Storage createdStorage)
        {
            try
            {
                var itemToken = _dataStorage.SetStorage(storage);
                createdStorage = _itemCache.GetOrCreate(new[] { itemToken }, _dataStorage.GetStorages).FirstOrDefault();

                return createdStorage != null;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public bool UpdateStorage(Storage storage, out Storage updatedStorage)
        {
            try
            {
                var itemToken = _dataStorage.UpdateStorage(storage);
                updatedStorage = _itemCache.GetOrCreate(new[] { itemToken }, _dataStorage.GetStorages).FirstOrDefault();

                return updatedStorage != null;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public bool DropStorage(int id)
        {
            _dataStorage.DropStorage(id);
            return !_dataStorage.GetStorageTokens(new[] { id }).Any();
        }

        public bool AddItemsToStorage(int storageId, IEnumerable<Item> items, out Storage updatedStorage)
        {
            try
            {
                updatedStorage = _dataStorage.GetStorages(new[] { _dataStorage.AddItemsToStorage(storageId, items) }).FirstOrDefault();

                return updatedStorage.Items.Intersect(items).Count() == items.Count();
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

        public bool RemoveItemsFromStorage(int storageId, IEnumerable<Item> items, out Storage updatedStorage)
        {
            try
            {
                updatedStorage = _dataStorage.GetStorages(new[] { _dataStorage.RemoveItemsFromStorage(storageId, items.Select(s => s.Id)) }).FirstOrDefault();

                return updatedStorage.Items.Intersect(items).Count() == 0;
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

        public bool MoveItemsBetweenStorages(IEnumerable<int> itemIds, int sourceStorage, int recepientStorage)
        {
            try
            {
                var updatedStorages = _dataStorage.GetStorages(_dataStorage.MoveItemsBetweenStorages(itemIds, sourceStorage, recepientStorage));

                return updatedStorages.FirstOrDefault(d => d.Id == sourceStorage).Items.Count(s => itemIds.Contains(s.Id)) == 0 &&
                    updatedStorages.FirstOrDefault(d => d.Id == recepientStorage).Items.Count(s => itemIds.Contains(s.Id)) == itemIds.Count();
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }
    }
}
