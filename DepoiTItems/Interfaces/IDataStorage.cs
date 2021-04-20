namespace DepoiTItems
{
    public interface IDataStorage : IItemDataStorage, IUserDataStorage
    {
        IDepotDataStorage DepotDataStorage { get; set; }
        IStorageDataStorage StorageDataStorage { get; set; }
        IPatternDataStorage PatternDataStorage { get; set; }
    }
}
