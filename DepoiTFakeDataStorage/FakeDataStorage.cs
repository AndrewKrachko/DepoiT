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

        public IEnumerable<IDepot> GetDepots(IEnumerable<string> tokens)
        {
            return _depots.FindAll(d => tokens.Contains(d.ObjectToken));
        }

        public IEnumerable<string> GetDepotTokens(IEnumerable<int> id)
        {
            return _depots.FindAll(d => id.Contains(d.Id)).Select(d => d.ObjectToken);
        }

        public IEnumerable<string> GetDepotTokensByUser(IEnumerable<int> userId)
        {
            return _depots.FindAll(d => userId.Contains(d.Owner.Id)).Select(d => d.ObjectToken);
        }

        public IUser GetUserByName(string name)
        {
            return _users.FirstOrDefault(u => u.Name == name);
        }

        public IUser GetUserByToken(string userToken)
        {
            return _users.FirstOrDefault(u => u.UserToken == userToken);
        }

        public string SetDepot(IDepot depot)
        {
            string itemToken;
            do
            {
                itemToken = StringGenerator.StringGenerator.GenerateString(_tokenCharset, _tokenLength);
            }
            while (_depots.Any(d => d.ObjectToken == itemToken));

            depot.Id = (_depots.LastOrDefault() == null ? 0 : _depots.LastOrDefault().Id) + 1;
            depot.ObjectToken = itemToken;

            _depots.Add((Depot)depot);

            return itemToken;
        }
    }
}
