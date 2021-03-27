using DepoiTItems;
using DepoiTRepository;
using StringGenerator;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DepoiTFakeDataStorage
{
    public class FakeDataStorage : IDataStorage
    {
        private readonly int _tokenLength;
        private char[] _tokenCharset;

        private List<User> _users;

        private List<Address> _addresses;

        private List<Depot> _depots;

        public FakeDataStorage()
        {
            _tokenCharset = StringGenerator.StringGenerator.GetCharArrayWithinAsciiRange();
            _tokenLength = 25;

            _users = new List<User>()
            {
                new User() { Id=0, Name="admin", Password = "123", UserToken = "87h4vhusd1", Email="admin@mail.com", ObjectToken=@"a(qSa3Y/P{d.-iHDG~n/f.g/""" },
                new User() { Id=1, Name="user", Password = "321", UserToken = "02vtr39sfd", Email="user@mail.com", ObjectToken = @"~ex`+Elp.4I@)>#j8Fix'$j-2" }
            };

            _addresses = new List<Address>()
            {
                new Address() { Id = 0 },
                new Address() { Id = 1, Street = "P. Brovki str.", ObjectToken = @"SXz3fKSQMV,1@id{K2F'|'jij" },
                new Address() { Id = 2, Street = "Odoevskogo", ObjectToken =@"""$L<}HHog!y6uR]6P|EN(ynT\", },
            };

            _depots = new List<Depot>
            {
                new Depot() {Id = 0, Name = "Default depot", Adress = _addresses[0], Owner = _users[0], IsPublic = false, ObjectToken = @"&pDobMl2HeH(5N.bAXhieU_hp"},
                new Depot() {Id = 1, Name = "User depot 1", Adress = _addresses[1], Owner = _users[1], IsPublic = false, ObjectToken=@"M)F;b'4v_xV$~%S.$Ml5/;O7j"},
                new Depot() {Id = 2, Name = "User depot 2", Adress = _addresses[2], Owner = _users[1], IsPublic = false, ObjectToken=@"fB'juP2[~6DGue^40UUV_BT6\"},
            };
        }

        public void DropDepot(int id)
        {
            var index = _depots.FindIndex(d => d.Id == id);
            if (index != -1)
            {
                _depots.RemoveAt(index);
            }
        }

        public IEnumerable<IDepot> GetDepots(IEnumerable<string> tokens) => _depots.FindAll(d => tokens.Contains(d.ObjectToken));

        public IEnumerable<string> GetDepotTokens(IEnumerable<int> id) => _depots.FindAll(d => id.Contains(d.Id)).Select(d => d.ObjectToken);

        public IEnumerable<string> GetDepotTokensByUser(IEnumerable<int> userId) => _depots.FindAll(d => userId.Contains(d.Owner.Id)).Select(d => d.ObjectToken);

        public IUser GetUserByName(string name) => _users.FirstOrDefault(u => u.Name == name);

        public IUser GetUserByToken(string userToken) => _users.FirstOrDefault(u => u.UserToken == userToken);


        public string SetDepot(IDepot depot)
        {
            string itemToken = GenerateToken(_depots);

            depot.Id = (_depots.LastOrDefault() == null ? 0 : _depots.LastOrDefault().Id) + 1;
            depot.ObjectToken = itemToken;

            _depots.Add((Depot)depot);

            return itemToken;
        }

        /// <summary>
        /// Enshure that Id and ObjectToken are equal to Id and ObjectToken stored in database object.
        /// </summary>
        /// <param name="depot">Updated object</param>
        /// <returns></returns>
        public string UpdateDepot(IDepot depot)
        {
            string itemToken = GenerateToken(_depots);

            var databaseItem = _depots.FirstOrDefault(d => d.ObjectToken == depot.ObjectToken && d.Id == depot.Id);

            if (databaseItem.Name != depot.Name) databaseItem.Name = depot.Name;
            if (databaseItem.Adress != depot.Adress) databaseItem.Adress = depot.Adress;
            if (databaseItem.Coordinates != depot.Coordinates) databaseItem.Coordinates = depot.Coordinates;
            if (databaseItem.Storages != depot.Storages) databaseItem.Storages = depot.Storages;
            if (databaseItem.IsPublic != depot.IsPublic) databaseItem.IsPublic = depot.IsPublic;
            if (databaseItem.Owner != depot.Owner) databaseItem.Owner = depot.Owner;
            databaseItem.ObjectToken = itemToken;

            return itemToken;
        }

        private string GenerateToken(IEnumerable<IObject> collection)
        {
            string itemToken;
            do
            {
                itemToken = StringGenerator.StringGenerator.GenerateString(_tokenCharset, _tokenLength);
            }
            while (collection.Any(d => d.ObjectToken == itemToken));
            return itemToken;
        }
    }
}
