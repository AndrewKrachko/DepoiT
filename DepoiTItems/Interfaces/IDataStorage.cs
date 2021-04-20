namespace DepoiTItems
{
    public interface IDataStorage : IUserDataStorage
    {
        IDepotDataStorage DepotDataStorage { get; set; }
        IStorageDataStorage StorageDataStorage { get; set; }
        IItemDataStorage ItemDataStorage { get; set; }
        IPatternDataStorage PatternDataStorage { get; set; }
    }
}
