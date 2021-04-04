namespace DepoiTItems
{
    public interface IRepository
    {
        IDepotRepository DepotRepository { get; set; }
        IUserRepository UserRepository { get; set; }
        IStorageRepository StorageRepository { get; set; }
        IItemRepository ItemRepository { get; set; }
        void SetDataStorage(IDataStorage dataStorage);
    }
}
