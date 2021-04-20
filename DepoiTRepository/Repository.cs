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

            DepotRepository = new DepotRepository(_dataStorage.DepotDataStorage);
            UserRepository = new UserRepository(_dataStorage);
            StorageRepository = new StorageRepository(_dataStorage);
            ItemRepository = new ItemRepository(_dataStorage);
        }

    }
}
