using DepoiTItems;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DepoiTWeb
{
    public class StorageModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string NameB { get; set; }
        public string NameC { get; set; }
        public string NameSplitter { get; set; }
        public IEnumerable<IItem> Items { get; set; }

        public IStorage GetStorage() => new Storage()
        {
            Id = Id,
            Name = Name,
            NameB = NameB,
            NameC = NameC,
            NameSplitter = NameSplitter,
            Items = Items,
        };
    }
}

