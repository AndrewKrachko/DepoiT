using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DepoiTItems
{
    public class Item : IItem
    {
        public IPattern Pattern { get; set; }
        public IEnumerable<IField<object>> Fields { get; set; }
        public int Id { get; set; }
        public string Name { get; set; }
        public string ObjectToken { get; set; }

        public override bool Equals(object obj)
        {
            return obj is Item item &&
                   EqualityComparer<IPattern>.Default.Equals(Pattern, item.Pattern) &&
                   EqualityComparer<IEnumerable<IField<object>>>.Default.Equals(Fields, item.Fields) &&
                   Id == item.Id &&
                   Name == item.Name &&
                   ObjectToken == item.ObjectToken;
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(Pattern, Fields, Id, Name, ObjectToken);
        }

        public static bool operator ==(Item itemA, Item itemB) => itemA.Equals(itemB);
        public static bool operator !=(Item itemA, Item itemB) => !itemA.Equals(itemB);
    }
}
