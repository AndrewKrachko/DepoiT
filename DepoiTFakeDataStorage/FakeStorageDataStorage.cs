using DepoiTItems;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DepoiTFakeDataStorage
{
    public partial class FakeDataStorage
    {
        public void DropStorage(int id) => _storages.RemoveAll(d => d.Id == id);

        public IEnumerable<Storage> GetStorages(IEnumerable<string> tokens) => _storages.FindAll(s => tokens.Contains(s.ObjectToken));

        public IEnumerable<string> GetStorageTokens(IEnumerable<int> id) => _storages.FindAll(s => id.Contains(s.Id)).Select(s => s.ObjectToken);

        // This method took the three hours of mine (remember to check source items for null or emptyness)
        public IEnumerable<string> GetStorageTokensByDepot(IEnumerable<int> depotId) => _depots?.Where(d => depotId.Contains(d.Id) && d.Storages != null && d.Storages.Count() != 0)?.Select(d => d?.Storages)?.SelectMany(s => s?.Select(s => s?.ObjectToken));

        public string SetStorage(Storage storage)
        {
            string itemToken = GenerateToken(_storages);

            storage.Id = (_storages.Count == 0 ? 0 : _storages.LastOrDefault().Id) + 1;
            storage.ObjectToken = itemToken;

            _storages.Add((Storage)storage);

            return itemToken;
        }

        public string UpdateStorage(Storage storage)
        {
            string itemToken = GenerateToken(_storages);

            var databaseItem = _storages.FirstOrDefault(d => d.Id == storage.Id);

            if (databaseItem != null)
            {
                if (databaseItem.Name != storage.Name) databaseItem.Name = storage.Name;
                if (databaseItem.NameB != storage.NameB) databaseItem.NameB = storage.NameB;
                if (databaseItem.NameC != storage.NameC) databaseItem.NameC = storage.NameC;
                if (databaseItem.NameSplitter != storage.NameSplitter) databaseItem.NameSplitter = storage.NameSplitter;
                if ((databaseItem.Items == null && storage.Items != null) ||
                    (databaseItem.Items != null && storage.Items == null) ||
                    (databaseItem.Items == null && storage.Items != null && databaseItem.Items.Equals(storage.Items))) databaseItem.Items = storage.Items;
                databaseItem.ObjectToken = itemToken;
            }

            return itemToken;
        }

        public string AddItemsToStorage(int storageId, IEnumerable<Item> items)
        {
            var storageToken = string.Empty;
            var storage = _storages.FirstOrDefault(d => d.Id == storageId);

            if (storage != null)
            {
                var storageItems = storage.Items.ToList();
                storageItems.AddRange(items);
                storage.Items = storageItems;
                storageToken = GenerateToken(_storages);
                storage.ObjectToken = storageToken;
            }

            return storageToken;
        }

        public string RemoveItemsFromStorage(int storageId, IEnumerable<int> itemsIds)
        {
            var storageToken = string.Empty;
            var storage = _storages.FirstOrDefault(d => d.Id == storageId);

            if (storage != null)
            {
                var storageItems = storage.Items.ToList();
                storageItems.RemoveAll(s => itemsIds.Contains(s.Id));
                storage.Items = storageItems;
                storageToken = GenerateToken(_storages);
                storage.ObjectToken = storageToken;
            }

            return storageToken;
        }

        public string[] MoveItemsBetweenStorages(IEnumerable<int> itemsIds, int sourceStorage, int recepientStorage)
        {
            var sourceStorageToken = string.Empty;
            var StorageToken = string.Empty;
            var storageSource = _storages.FirstOrDefault(d => d.Id == sourceStorage);
            var storageRecepient = _storages.FirstOrDefault(d => d.Id == recepientStorage);
            var items = _items.Where(s => itemsIds.Contains(s.Id));

            if (storageSource != null && storageRecepient != null)
            {
                var recipientDepotStorages = storageRecepient.Items.ToList();
                recipientDepotStorages.AddRange(items);
                storageRecepient.Items = recipientDepotStorages;
                StorageToken = GenerateToken(_depots);
                storageRecepient.ObjectToken = StorageToken;

                var sourceDepotStorages = storageRecepient.Items.ToList();
                sourceDepotStorages.AddRange(items);
                storageRecepient.Items = sourceDepotStorages;
                storageRecepient.Items.ToList().RemoveAll(s => items.Contains(s));
                sourceStorageToken = GenerateToken(_depots);
                storageSource.ObjectToken = StorageToken;
            }

            return new[] { sourceStorageToken, StorageToken };
        }
    }
}
