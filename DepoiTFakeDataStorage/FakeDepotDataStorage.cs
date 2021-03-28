using DepoiTItems;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DepoiTFakeDataStorage
{
    public partial class FakeDataStorage
    {
        public string AddStogaresToDepot(int depotId, IEnumerable<IStorage> storages)
        {
            throw new NotImplementedException();
        }

        public void DropDepot(int id)
        {
            var index = _depots.FindIndex(d => d.Id == id);
            if (index != -1)
            {
                _depots.RemoveAt(index);
            }
        }

        public IEnumerable<IDepot> GetDepots(IEnumerable<string> tokens) => _depots.FindAll(d => tokens.Contains(d.ObjectToken));

        public IEnumerable<string> GetDepotTokens(IEnumerable<int> id) => _depots.FindAll(d => id.Contains(d.Id)).Select(d => d.ObjectToken);

        public IEnumerable<string> GetDepotTokensByUser(IEnumerable<int> userId) => _depots.FindAll(d => userId.Contains(d.Owner.Id)).Select(d => d.ObjectToken);

        public string[] MoveStoragesBetweenDepots(IEnumerable<int> storageIds, int sourceDepot, int recepientDepot)
        {
            throw new NotImplementedException();
        }

        public string RemoveStoragesFromDeppot(int depotId, IEnumerable<int> ids)
        {
            throw new NotImplementedException();
        }

        public string SetDepot(IDepot depot)
        {
            string itemToken = GenerateToken(_depots);

            depot.Id = (_depots.LastOrDefault() == null ? 0 : _depots.LastOrDefault().Id) + 1;
            depot.ObjectToken = itemToken;

            _depots.Add((Depot)depot);

            return itemToken;
        }


        public string UpdateDepot(IDepot depot)
        {
            string itemToken = GenerateToken(_depots);

            var databaseItem = _depots.FirstOrDefault(d => d.Id == depot.Id);

            if (databaseItem.Name != depot.Name) databaseItem.Name = depot.Name;
            if (databaseItem.Adress != depot.Adress) databaseItem.Adress = depot.Adress;
            if (databaseItem.Coordinates != depot.Coordinates) databaseItem.Coordinates = depot.Coordinates;
            if (databaseItem.Storages != depot.Storages) databaseItem.Storages = depot.Storages;
            if (databaseItem.IsPublic != depot.IsPublic) databaseItem.IsPublic = depot.IsPublic;
            if (databaseItem.Owner != depot.Owner) databaseItem.Owner = depot.Owner;
            databaseItem.ObjectToken = itemToken;

            return itemToken;
        }
    }
}
