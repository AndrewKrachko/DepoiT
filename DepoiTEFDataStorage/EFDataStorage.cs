using DepoiTItems;
using Microsoft.EntityFrameworkCore;

namespace DepoiTEFDataStorage
{
    public class EFDataStorage: IDataStorage
    {
        private DepoiTDbContext _dbContext;

        public IUserDataStorage UserDataStorage { get; set; }
        public IDepotDataStorage DepotDataStorage { get; set; }
        public IStorageDataStorage StorageDataStorage { get; set; }
        public IItemDataStorage ItemDataStorage { get; set; }
        public IPatternDataStorage PatternDataStorage { get; set; }

        public EFDataStorage(IConnectionData connectionData)
        {
            _dbContext = new DepoiTDbContext();
            var cs = connectionData.GetConnectionString();
            _dbContext.Database.SetConnectionString(cs);
            _dbContext.Database.EnsureCreated();
        }

    }
}
