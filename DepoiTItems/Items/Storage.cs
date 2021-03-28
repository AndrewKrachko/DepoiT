using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DepoiTItems
{
    public class Storage : IStorage
    {
        public string NameB { get; set; }
        public string NameC { get; set; }
        public string NameSplitter { get; set; }
        public IEnumerable<IItem> Items { get; set; }
        public int Id { get; set; }
        public string Name { get; set; }
        public string ObjectToken { get; set; }

        public static bool operator == (Storage storageA, Storage storageB) =>
            storageA.Id == storageB.Id && storageA.Name == storageB.Name && storageA.NameB == storageB.NameB && storageA.NameC == storageB.NameC && 
            storageA.NameSplitter == storageB.NameSplitter && storageA.ObjectToken == storageB.ObjectToken && storageA.Items?.Count() == storageB.Items?.Count() &&
            storageA.Items?.Intersect(storageB.Items).Count() == storageA.Items?.Count();
        public static bool operator !=(Storage storageA, Storage storageB) =>
            storageA.Id != storageB.Id || storageA.Name != storageB.Name || storageA.NameB != storageB.NameB || storageA.NameC != storageB.NameC ||
            storageA.NameSplitter != storageB.NameSplitter || storageA.ObjectToken != storageB.ObjectToken || storageA.Items?.Count() != storageB.Items?.Count() ||
            storageA.Items?.Intersect(storageB.Items).Count() != storageA.Items?.Count();
    }
}
