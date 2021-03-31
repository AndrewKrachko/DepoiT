using DepoiTItems;
using DepoiTRepository;
using StringGenerator;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DepoiTFakeDataStorage
{
    public partial class FakeDataStorage : IDataStorage
    {
        private readonly int _tokenLength;
        private char[] _tokenCharset;

        private List<User> _users;

        private List<Address> _addresses;

        private List<Depot> _depots;

        private List<Storage> _storages;

        private List<Item> _items;

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

            _items = new List<Item>()
            {
                new Item() { Id = 0, Name = "Gun shell", ObjectToken = @"VOO_LUM21?9Oe3:4&%'N.0`aY" },
                new Item() { Id = 1, Name = "KT-3102", ObjectToken = @"R<sUO\vyHM|-5""gYAlRb\v`%`" },
                new Item() { Id = 2, Name = "IN-4001", ObjectToken = @"?l5HfFmm'y9X\`bAU>e='o$>t" },
            };

            _storages = new List<Storage>()
            {
                new Storage() { Id = 0, Name = "A", NameB = "4", NameC = "M1", ObjectToken = @"?""ihr(+zEvQ+A+9u1pjE2@%j1", Items= new List<Item> () { _items[0] } },
                new Storage() { Id = 1, Name = "Abrams", NameB = "", NameC = "M1", NameSplitter= " ", ObjectToken = @"aa~u8e)SnN9lo""f5-xPf*G@rz"},
                new Storage() { Id = 2, Name = "M", NameB = "4", NameC = "Sherman", NameSplitter= " ", ObjectToken = @"D;&VR~|}X1F+%-2IWQ\!)@o$0"},
                new Storage() { Id = 3, Name = "B-52", NameSplitter= " ", ObjectToken = @"%GT%(;B-yrJ$|<O;n8oA+(k>>"},
                new Storage() { Id = 4, Name = "vfvb2wrrb", NameB = "", NameC = "LFKN Efcvnaso", NameSplitter= "---", ObjectToken = @"Rtbqr$K""FNWIyQu$|+9gEY6.d"},
                new Storage() { Id = 5, Name = "ojrvk kMEMF", NameB = " lf,3mq89", NameC = "UHUIEfv98dsdvs", NameSplitter= "-", ObjectToken = @"9)!a&|[6eTE^;'o~""Vmvqtfx="},
                new Storage() { Id = 6, Name = "\"My", NameB = "name is", NameC = "Vasia", NameSplitter= " ", ObjectToken = @"-|RVww_U.YzJ@@Q{34{PEb$Ih", Items = new List<Item> () { _items[1], _items[2]} },
                new Storage() { Id = 7, Name = "Bh", NameB = "4", NameSplitter= "", ObjectToken = @"D$G6qDB'Dx~*_m\e)-LtT`6=z"},
            };

            _depots = new List<Depot>
            {
                new Depot() {Id = 0, Name = "Default depot", Adress = _addresses[0], Owner = _users[0], IsPublic = false, ObjectToken = @"&pDobMl2HeH(5N.bAXhieU_hp",
                    Storages = new []{ _storages[0], _storages[1], _storages[2] } },
                new Depot() {Id = 1, Name = "User depot 1", Adress = _addresses[1], Owner = _users[1], IsPublic = false, ObjectToken=@"M)F;b'4v_xV$~%S.$Ml5/;O7j",
                    Storages = new []{ _storages[3], _storages[4], _storages[5] } },
                new Depot() {Id = 2, Name = "User depot 2", Adress = _addresses[2], Owner = _users[1], IsPublic = false, ObjectToken=@"fB'juP2[~6DGue^40UUV_BT6\",
                    Storages = new []{ _storages[6], _storages[7] } },
                new Depot() {Id = 3, Name = "Empty depot", Owner = _users[1], ObjectToken=@"lB/}{ZZos1obR`'/?/'O!c-oA" },
            };
        }

        public IUser GetUserByName(string name) => _users.FirstOrDefault(u => u.Name == name);

        public IUser GetUserByToken(string userToken) => _users.FirstOrDefault(u => u.UserToken == userToken);

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
