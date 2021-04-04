using DepoiTItems;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DepoiTFakeDataStorage
{
    public partial class FakeDataStorage
    {
        public string AddStogaresToDepot(int depotId, IEnumerable<Storage> storages)
        {
            var depotToken = string.Empty;
            var depot = _depots.FirstOrDefault(d => d.Id == depotId);

            if (depot != null)
            {
                var depotStorages = depot.Storages.ToList();
                depotStorages.AddRange(storages);
                depot.Storages = depotStorages;
                depotToken = GenerateToken(_depots);
                depot.ObjectToken = depotToken;
            }

            return depotToken;
        }

        public void DropDepot(int id) => _depots.RemoveAll(d => d.Id == id);

        public IEnumerable<Depot> GetDepots(IEnumerable<string> tokens) => _depots.FindAll(d => tokens.Contains(d.ObjectToken));

        public IEnumerable<string> GetDepotTokens(IEnumerable<int> id) => _depots.FindAll(d => id.Contains(d.Id)).Select(d => d.ObjectToken);

        public IEnumerable<string> GetDepotTokensByUser(IEnumerable<int> userId) => _depots.FindAll(d => userId.Contains(d.Owner.Id)).Select(d => d.ObjectToken);

        public string[] MoveStoragesBetweenDepots(IEnumerable<int> storageIds, int sourceDepot, int recepientDepot)
        {
            var sourceDepotToken = string.Empty;
            var recepientDepotToken = string.Empty;
            var depotSource = _depots.FirstOrDefault(d => d.Id == sourceDepot);
            var depotRecepient = _depots.FirstOrDefault(d => d.Id == recepientDepot);
            var storages = _storages.Where(s => storageIds.Contains(s.Id));

            if (depotSource != null && depotRecepient != null)
            {
                var recipientDepotStorages = depotRecepient.Storages.ToList();
                recipientDepotStorages.AddRange(storages);
                depotRecepient.Storages = recipientDepotStorages;
                recepientDepotToken = GenerateToken(_depots);
                depotRecepient.ObjectToken = recepientDepotToken;

                var sourceDepotStorages = depotRecepient.Storages.ToList();
                sourceDepotStorages.AddRange(storages);
                depotRecepient.Storages = sourceDepotStorages;
                depotRecepient.Storages.ToList().RemoveAll(s => storages.Contains(s));
                sourceDepotToken = GenerateToken(_depots);
                depotSource.ObjectToken = recepientDepotToken;
            }

            return new[] { sourceDepotToken, recepientDepotToken };
        }

        public string RemoveStoragesFromDepot(int depotId, IEnumerable<int> ids)
        {
            var depotToken = string.Empty;
            var depot = _depots.FirstOrDefault(d => d.Id == depotId);

            if (depot != null)
            {
                var depotStorages = depot.Storages.ToList();
                depotStorages.RemoveAll(s => ids.Contains(s.Id));
                depot.Storages = depotStorages;
                depotToken = GenerateToken(_depots);
                depot.ObjectToken = depotToken;
            }

            return depotToken;
        }

        public string SetDepot(Depot depot)
        {
            string itemToken = GenerateToken(_depots);

            depot.Id = (_depots.Count == 0 ? 0 : _depots.LastOrDefault().Id) + 1;
            depot.ObjectToken = itemToken;

            _depots.Add((Depot)depot);

            return itemToken;
        }


        public string UpdateDepot(Depot depot)
        {
            string itemToken = GenerateToken(_depots);

            var databaseItem = _depots.FirstOrDefault(d => d.Id == depot.Id);

            if (databaseItem != null)
            {
                if (databaseItem.Name != depot.Name) databaseItem.Name = depot.Name;
                if (databaseItem.Adress != depot.Adress) databaseItem.Adress = depot.Adress;
                if (databaseItem.Coordinates != depot.Coordinates) databaseItem.Coordinates = depot.Coordinates;
                if (databaseItem.IsPublic != depot.IsPublic) databaseItem.IsPublic = depot.IsPublic;
                if (databaseItem.Owner != depot.Owner) databaseItem.Owner = depot.Owner;
                if ((databaseItem.Storages == null && depot.Storages != null) ||
                    (databaseItem.Storages != null && depot.Storages == null) ||
                    (databaseItem.Storages != null && depot.Storages != null && databaseItem.Storages.Equals(depot.Storages))) databaseItem.Storages = depot.Storages;
                databaseItem.ObjectToken = itemToken;
            }

            return itemToken;
        }
    }
}
