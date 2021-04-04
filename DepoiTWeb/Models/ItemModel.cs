using DepoiTItems;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DepoiTWeb
{
    public class ItemModel
    {
        public IPattern Pattern { get; set; }
        public IEnumerable<IField<object>> Fields { get; set; }
        public int Id { get; set; }
        public string Name { get; set; }
        public string ObjectToken { get; set; }

        public IItem GetItem() => new Item() { Id = Id, Name = Name, ObjectToken = ObjectToken, Fields = Fields, Pattern = Pattern };
    }
}
