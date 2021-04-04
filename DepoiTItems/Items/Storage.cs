using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DepoiTItems
{
    public class Storage : DepoiTObject, IStorage
    {
        public string NameB { get; set; }
        public string NameC { get; set; }
        public string NameSplitter { get; set; }
        public List<Item> Items { get; set; }

        public override bool Equals(object obj)
        {
            return obj is Storage storage
                && base.Equals(storage)
                && NameB == storage.NameB
                && NameC == storage.NameC
                && NameSplitter == storage.NameSplitter
                && ((Items == null && storage.Items == null) || (Items != null && storage.Items != null && Items.SequenceEqual(storage.Items)));
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(base.GetHashCode(), NameB, NameC, NameSplitter, Items);
        }

        public static bool operator ==(Storage storageA, Storage storageB) => storageA is Storage && storageB is Storage && storageA.Equals(storageB);
        public static bool operator !=(Storage storageA, Storage storageB) => storageA is Storage && storageB is null
            || storageA is null && storageB is Storage
            || storageA is Storage && storageB is Storage && !storageA.Equals(storageB);
    }
}
