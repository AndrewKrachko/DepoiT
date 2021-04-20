namespace DepoiTItems
{
    public interface IDataStorage : IStorageDataStorage, IItemDataStorage, IUserDataStorage
    {
        IDepotDataStorage DepotDataStorage { get; set; }
        IPatternDataStorage PatternDataStorage { get; set; }
    }
}
