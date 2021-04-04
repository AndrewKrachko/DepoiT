using System.Collections.Generic;

namespace DepoiTItems
{
    public interface IStorage : IObject
    {
        string NameB { get; set; }
        string NameC { get; set; }
        string NameSplitter { get; set; }
        List<Item> Items { get; set; }
    }
}