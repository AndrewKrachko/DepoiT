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

        public override bool Equals(object obj)
        {
            return obj is Storage storage &&
                   NameB == storage.NameB &&
                   NameC == storage.NameC &&
                   NameSplitter == storage.NameSplitter &&
                   ((Items == null && storage.Items == null) || (Items != null && storage.Items != null && Items.SequenceEqual(storage.Items))) &&
                   Id == storage.Id &&
                   Name == storage.Name &&
                   ObjectToken == storage.ObjectToken;
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(NameB, NameC, NameSplitter, Items, Id, Name, ObjectToken);
        }

        public static bool operator ==(Storage storageA, Storage storageB) => storageA.Equals(storageB);
        public static bool operator !=(Storage storageA, Storage storageB) => !storageA.Equals(storageB);
    }
}
