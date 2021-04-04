using DepoitConfigurator;
using DepoiTItems;
using Logger;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DepoiTCore
{
    public class Core : ICore
    {
        private readonly IRepository _repository;
        private readonly ILogger _logger;

        public Core()
        {
            _repository = Configurator.GetRepository();
            _logger = Configurator.GetLogger();
        }

        public bool AddStoragesToDepot(int depotId, IEnumerable<Storage> storages)
        {
            return _repository.AddStoragesToDepot(depotId, storages, out var depot);
        }

        public bool DropDepot(int id)
        {
            return _repository.DropDepot(id);
        }

        public bool DropItem(int id)
        {
            return _repository.DropItem(id);
        }

        public bool DropStorage(int id)
        {
            return _repository.DropStorage(id);
        }

        public bool GetDepot(int id, out Depot depot)
        {
            if (_repository.GetDepots(new[] { id }, out var depots))
            {
                depot = depots.FirstOrDefault();
                return true;
            }
            else
            {
                depot = null;
                return false;
            }
        }

        public bool GetDepotsByUser(int userId, out IEnumerable<Depot> depots)
        {
            if (_repository.GetDepotsByUser(userId, out depots))
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        public bool GetItem(int id, out Item item)
        {
            if (_repository.GetItems(new[] { id }, out var items))
            {
                item = items.FirstOrDefault();
                return true;
            }
            else
            {
                item = null;
                return false;
            }
        }

        public bool GetItemsByStorage(int storageId, out IEnumerable<Item> items)
        {
            if (_repository.GetItemsByStorage(storageId, out items))
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        public bool GetStorage(int id, out Storage storage)
        {
            if (_repository.GetStorages(new[] { id }, out var storages))
            {
                storage = storages.FirstOrDefault();
                return true;
            }
            else
            {
                storage = null;
                return false;
            }
        }

        public bool GetStoragesByDepot(int depotId, out IEnumerable<Storage> storages)
        {
            if (_repository.GetStoragesByDepot(depotId, out storages))
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        public bool MoveStoragesBetweenDepots(IEnumerable<int> storageIds, int sourceDepot, int recepientDepot)
        {
            return _repository.MoveStoragesBetweenDepots(storageIds, sourceDepot, recepientDepot);
        }

        public bool RemoveStoragesFromDepot(int depotId, IEnumerable<Storage> storages)
        {
            return _repository.RemoveStoragesFromDepot(depotId, storages, out var depot);
        }

        public bool SetDepot(Depot depot, out Depot createdDepot)
        {
            var userToken = depot.Owner.UserToken;

            if (_repository.GetUserByToken(userToken, out var user))
            {
                depot.Owner = user;

                if (_repository.SetDepot(depot, out createdDepot))
                {
                    return true;
                }
            }

            createdDepot = null;
            return false;
        }

        public bool SetItem(int storageId, Item item, out Item createdItem)
        {
            if (_repository.GetStorages(new[] { storageId }, out var _))
            {
                if (_repository.SetItem(item, out createdItem) &&
                    _repository.AddItemsToStorage(storageId, new[] { createdItem }, out var _))
                {
                    return true;
                }
            }

            createdItem = null;
            return false;
        }

        public bool SetStorage(int depotId, Storage storage, out Storage createdStorage)
        {
            if (_repository.GetDepots(new[] { depotId }, out var _))
            {
                if (_repository.SetStorage(storage, out createdStorage) && 
                    _repository.AddStoragesToDepot(depotId, new[] { createdStorage }, out var _))
                {
                    return true;
                }
            }

            createdStorage = null;
            return false;
        }

        public bool UpdateDepot(Depot depot, out Depot createdDepot)
        {
            var userToken = depot.Owner.UserToken;

            if (_repository.GetUserByToken(userToken, out var user))
            {
                depot.Owner = user;

                if (_repository.UpdateDepot(depot, out createdDepot))
                {
                    return true;
                }
            }

            createdDepot = null;
            return false;
        }

        public bool UpdateItem(Item item, out Item updatedItem)
        {
            if (_repository.UpdateItem(item, out updatedItem))
            {
                return true;
            }

            updatedItem = null;
            return false;
        }

        public bool UpdateStorage(Storage storage, out Storage updatedStorage)
        {
            if (_repository.UpdateStorage(storage, out updatedStorage))
            {
                return true;
            }

            updatedStorage = null;
            return false;
        }
    }
}
