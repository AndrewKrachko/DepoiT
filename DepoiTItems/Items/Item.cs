using System;
using System.Collections.Generic;

namespace DepoiTItems
{
    public class Item : DepoiTObject, IItem
    {
        public Pattern Pattern { get; set; }
        public List<Field<object>> Fields { get; set; }

        public override bool Equals(object obj)
        {
            return obj is Item item
                && base.Equals(item)
                && EqualityComparer<IPattern>.Default.Equals(Pattern, item.Pattern)
                && EqualityComparer<IEnumerable<IField<object>>>.Default.Equals(Fields, item.Fields);
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(base.GetHashCode(), Pattern, Fields);
        }

        public static bool operator ==(Item itemA, Item itemB) => itemA.Equals(itemB);
        public static bool operator !=(Item itemA, Item itemB) => !itemA.Equals(itemB);
    }
}
