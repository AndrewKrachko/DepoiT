using DepoiTItems;
using Microsoft.EntityFrameworkCore;
using System;

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
                new User() { Id = 0, Name = "admin", Password = "123", UserToken = "87h4vhusd1", Email = "admin@mail.com", ObjectToken = @"a(qSa3Y/P{d.-iHDG~n/f.g/""" },
                new User() { Id = 1, Name = "user", Password = "321", UserToken = "02vtr39sfd", Email = "user@mail.com", ObjectToken = @"~ex`+Elp.4I@)>#j8Fix'$j-2" }
                });

        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {

        }
    }
}
