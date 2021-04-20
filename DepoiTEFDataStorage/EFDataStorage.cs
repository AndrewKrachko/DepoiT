using DepoiTItems;
using Microsoft.EntityFrameworkCore;

namespace DepoiTEFDataStorage
{
    public class EFDataStorage : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Address> Addresses { get; set; }
        public DbSet<Depot> Depots { get; set; }
        public DbSet<Storage> Storages { get; set; }
        public DbSet<Item> Items { get; set; }
        public DbSet<Pattern> Patterns { get; set; }

        public EFDataStorage()
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().HasData(new[]{
                new User() { Id=0, Name="admin", PasswordHash = "AQAAAAEAACcQAAAAEKKBOCdrUFEKQLlXdpRNnryUOg/gypmqO/mFzVx3FwMNjTipxWppGPOaMfix5PlvCA==", UserToken = "87h4vhusd1", Email="admin@mail.com", ObjectToken=@"a(qSa3Y/P{d.-iHDG~n/f.g/""" },
                new User() { Id=1, Name="user", PasswordHash = "AQAAAAEAACcQAAAAEKKBOCdrUFEKQLlXdpRNnryUOg/gypmqO/mFzVx3FwMNjTipxWppGPOaMfix5PlvCA==", UserToken = "02vtr39sfd", Email="user@mail.com", ObjectToken = @"~ex`+Elp.4I@)>#j8Fix'$j-2" }
                });

        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {

        }
    }
}
