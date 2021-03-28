using DepoiTItems;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DepoiTFakeDataStorage
{
    public partial class FakeDataStorage
    {
        public void DropStorage(int id) => _storages.RemoveAll(d => d.Id == id);

        public IEnumerable<IStorage> GetStorages(IEnumerable<string> tokens) => _storages.FindAll(s => tokens.Contains(s.ObjectToken));

        public IEnumerable<string> GetStorageTokens(IEnumerable<int> id) => _storages.FindAll(s => id.Contains(s.Id)).Select(s => s.ObjectToken);

        public IEnumerable<string> GetStorageTokensByDepot(IEnumerable<int> depotId) => _depots.Where(d => depotId.Contains(d.Id)).Select(d => d.Storages).SelectMany(s => s.Select(s => s.ObjectToken));

        public string SetStorage(IStorage storage)
        {
            string itemToken = GenerateToken(_storages);

            storage.Id = (_storages.Count == 0 ? 0 : _storages.LastOrDefault().Id) + 1;
            storage.ObjectToken = itemToken;

            _storages.Add((Storage)storage);

            return itemToken;
        }

        public string UpdateStorage(IStorage storage)
        {
            string itemToken = GenerateToken(_depots);

            var databaseItem = _storages.FirstOrDefault(d => d.Id == storage.Id);

            if (databaseItem.Name != storage.Name) databaseItem.Name = storage.Name;
            if (databaseItem.NameB != storage.NameB) databaseItem.NameB = storage.NameB;
            if (databaseItem.NameC != storage.NameC) databaseItem.NameC = storage.NameC;
            if (databaseItem.NameSplitter != storage.NameSplitter) databaseItem.NameSplitter = storage.NameSplitter;
            if ((databaseItem.Items == null && storage.Items != null) ||
                (databaseItem.Items != null && storage.Items == null) ||
                (databaseItem.Items == null && storage.Items != null && databaseItem.Items.Equals(storage.Items))) databaseItem.Items = storage.Items;
            databaseItem.ObjectToken = itemToken;

            return itemToken;
        }
    }
}
