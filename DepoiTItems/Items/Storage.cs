using System;
using System.Collections.Generic;
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
    }
}
