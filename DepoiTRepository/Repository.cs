using DepoiTItems;

namespace DepoiTRepository
{
    public class Repository : IRepository
    {
        private IDataStorage _dataStorage;

        public IDepotRepository DepotRepository { get; set; }
        public IUserRepository UserRepository { get; set; }
        public IStorageRepository StorageRepository { get; set; }
        public IItemRepository ItemRepository { get; set; }

        public Repository(IDataStorage dataStorage)
        {
            SetDataStorage(dataStorage);
        }

        public void SetDataStorage(IDataStorage dataStorage)
        {
            _dataStorage = dataStorage;

            UserRepository = new UserRepository(_dataStorage);
            DepotRepository = new DepotRepository(_dataStorage.DepotDataStorage);
            StorageRepository = new StorageRepository(_dataStorage.StorageDataStorage);
            ItemRepository = new ItemRepository(_dataStorage.ItemDataStorage);
        }

    }
}
