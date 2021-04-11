using DepoitConfigurator;
using DepoiTItems;
using Logger;
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
            return _repository.DepotRepository.AddStoragesToDepot(depotId, storages, out var depot);
        }

        public bool DropDepot(int id)
        {
            return _repository.DepotRepository.DropDepot(id);
        }

        public bool DropItem(int id)
        {
            return _repository.ItemRepository.DropItem(id);
        }

        public bool DropStorage(int id)
        {
            return _repository.StorageRepository.DropStorage(id);
        }

        public bool DropUser(int userId)
        {
            return _repository.UserRepository.DropUser(userId);
        }

        public bool GetDepot(int id, out Depot depot)
        {
            if (_repository.DepotRepository.GetDepots(new[] { id }, out var depots))
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
            if (_repository.DepotRepository.GetDepotsByUser(userId, out depots))
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
            if (_repository.ItemRepository.GetItems(new[] { id }, out var items))
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
            if (_repository.ItemRepository.GetItemsByStorage(storageId, out items))
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
            if (_repository.StorageRepository.GetStorages(new[] { id }, out var storages))
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
            if (_repository.StorageRepository.GetStoragesByDepot(depotId, out storages))
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        public bool GetUser(int id, out User user)
        {
            if (_repository.UserRepository.GetUsers(new[] { id }, out var users))
            {
                user = users.FirstOrDefault();
                return true;
            }
            else
            {
                user = null;
                return false;
            }
        }

        public bool GetUserByNameOrEmail(string value, out User user)
        {
            return _repository.UserRepository.GetUserByName(value, out user);
        }

        public bool MoveStoragesBetweenDepots(IEnumerable<int> storageIds, int sourceDepot, int recepientDepot)
        {
            return _repository.DepotRepository.MoveStoragesBetweenDepots(storageIds, sourceDepot, recepientDepot);
        }

        public bool RemoveStoragesFromDepot(int depotId, IEnumerable<Storage> storages)
        {
            return _repository.DepotRepository.RemoveStoragesFromDepot(depotId, storages, out var depot);
        }

        public bool SetDepot(Depot depot, out Depot createdDepot)
        {
            var userToken = depot.Owner.UserToken;

            if (_repository.UserRepository.GetUserByToken(userToken, out var user))
            {
                depot.Owner = user;

                if (_repository.DepotRepository.SetDepot(depot, out createdDepot))
                {
                    return true;
                }
            }

            createdDepot = null;
            return false;
        }

        public bool SetItem(int storageId, Item item, out Item createdItem)
        {
            if (_repository.StorageRepository.GetStorages(new[] { storageId }, out var _))
            {
                if (_repository.ItemRepository.SetItem(item, out createdItem) &&
                    _repository.StorageRepository.AddItemsToStorage(storageId, new[] { createdItem }, out var _))
                {
                    return true;
                }
            }

            createdItem = null;
            return false;
        }

        public bool SetStorage(int depotId, Storage storage, out Storage createdStorage)
        {
            if (_repository.DepotRepository.GetDepots(new[] { depotId }, out var _))
            {
                if (_repository.StorageRepository.SetStorage(storage, out createdStorage) &&
                    _repository.DepotRepository.AddStoragesToDepot(depotId, new[] { createdStorage }, out var _))
                {
                    return true;
                }
            }

            createdStorage = null;
            return false;
        }

        public bool SetUser(User user)
        {
            return _repository.UserRepository.SetUser(user, out var createdUser);
        }

        public bool UpdateDepot(Depot depot, out Depot createdDepot)
        {
            var userToken = depot.Owner.UserToken;

            if (_repository.UserRepository.GetUserByToken(userToken, out var user))
            {
                depot.Owner = user;

                if (_repository.DepotRepository.UpdateDepot(depot, out createdDepot))
                {
                    return true;
                }
            }

            createdDepot = null;
            return false;
        }

        public bool UpdateItem(Item item, out Item updatedItem)
        {
            if (_repository.ItemRepository.UpdateItem(item, out updatedItem))
            {
                return true;
            }

            updatedItem = null;
            return false;
        }

        public bool UpdateStorage(Storage storage, out Storage updatedStorage)
        {
            if (_repository.StorageRepository.UpdateStorage(storage, out updatedStorage))
            {
                return true;
            }

            updatedStorage = null;
            return false;
        }

        public bool UpdateUser(User user, out User updatedUser)
        {
            if (_repository.UserRepository.UpdateUser(user, out updatedUser))
            {
                return true;
            }

            updatedUser = null;
            return false;
        }
    }
}
