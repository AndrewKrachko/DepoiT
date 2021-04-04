using DepoiTItems;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DepoiTFakeDataStorage
{
    public partial class FakeDataStorage
    {
        public IEnumerable<string> GetItemTokens(IEnumerable<int> id) => _items.FindAll(s => id.Contains(s.Id)).Select(s => s.ObjectToken);
        public IEnumerable<string> GetItemTokensByStorage(IEnumerable<int> storageId) => _storages?.Where(d => storageId.Contains(d.Id) && d.Items != null && d.Items.Count() != 0)?.Select(d => d.Items).SelectMany(s => s?.Select(s => s?.ObjectToken));
        public IEnumerable<Item> GetItems(IEnumerable<string> tokens) => _items.FindAll(s => tokens.Contains(s.ObjectToken));

        public string SetItem(Item item)
        {
            string itemToken = GenerateToken(_items);

            item.Id = (_items.Count == 0 ? 0 : _items.LastOrDefault().Id) + 1;
            item.ObjectToken = itemToken;

            _items.Add((Item)item);

            return itemToken;
        }

        public string UpdateItem(Item item)
        {
            string itemToken = GenerateToken(_items);

            var databaseItem = _items.FirstOrDefault(d => d.Id == item.Id);

            if (databaseItem.Name != item.Name) databaseItem.Name = item.Name;
            if (databaseItem.Pattern != item.Pattern) databaseItem.Pattern = item.Pattern;
            if ((databaseItem.Fields == null && item.Fields != null) ||
                (databaseItem.Fields != null && item.Fields == null) ||
                (databaseItem.Fields == null && item.Fields != null && databaseItem.Fields.Equals(item.Fields))) databaseItem.Fields = item.Fields;
            databaseItem.ObjectToken = itemToken;

            return itemToken;
        }

        public void DropItem(int id) => _items.RemoveAll(d => d.Id == id);
    }
}
