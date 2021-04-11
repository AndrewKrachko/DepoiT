using DepoiTItems;
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
        private readonly List<FieldPattern> _fieldPatterns;
        private readonly List<Field> _values;
        private List<Pattern> _patterns;
        private List<Depot> _depots;

        private List<Storage> _storages;

        private List<Item> _items;

        public FakeDataStorage()
        {
            _tokenCharset = StringGenerator.StringGenerator.GetCharArrayWithinAsciiRange();
            _tokenLength = 25;

            _users = new List<User>()
            {
                new User() { Id=0, Name="admin", PasswordHash = "AQAAAAEAACcQAAAAEKKBOCdrUFEKQLlXdpRNnryUOg/gypmqO/mFzVx3FwMNjTipxWppGPOaMfix5PlvCA==", UserToken = "87h4vhusd1", Email="admin@mail.com", ObjectToken=@"a(qSa3Y/P{d.-iHDG~n/f.g/""" },
                new User() { Id=1, Name="user", PasswordHash = "AQAAAAEAACcQAAAAEKKBOCdrUFEKQLlXdpRNnryUOg/gypmqO/mFzVx3FwMNjTipxWppGPOaMfix5PlvCA==", UserToken = "02vtr39sfd", Email="user@mail.com", ObjectToken = @"~ex`+Elp.4I@)>#j8Fix'$j-2" }
            };

            _addresses = new List<Address>()
            {
                new Address() { Id = 0 },
                new Address() { Id = 1, Street = "P. Brovki str.", ObjectToken = @"SXz3fKSQMV,1@id{K2F'|'jij" },
                new Address() { Id = 2, Street = "Odoevskogo", ObjectToken =@"""$L<}HHog!y6uR]6P|EN(ynT\", },
            };

            _fieldPatterns = new List<FieldPattern>()
            {
                new StringPattern() { Id=0, Name="Name", IsRequired=true, DefaultValue =string.Empty, SerializedValue= string.Empty, Owner=_users[0], ObjectToken = @")Ri;/!s}!GRdN`j$""Vo""%X4<#" },
                new NumberPattern() { Id=1, Name="Quantity", IsRequired=true, DefaultValue =0, SerializedValue= string.Empty, Owner=_users[0], ObjectToken = @"T,7^pssK#gGz,JSM_b_`/6f<f" },
                new StringSetPattern() {Id =2, Name="Material", StringSet = new List<string>(){ "Still", "Brass", "Copper" }, DefaultValue="Copper", SerializedValue=string.Empty, Owner=_users[0], ObjectToken=@"s%EPtP>N9Zt]?/R^9KwC(t,=S" },
                new NumberSetPattern() {Id=3, Name="Step", ValueSet= new List<double> { 1, 1.25, 2, 2.25, 2.5, 5 }, DefaultValue = 2.5, SerializedValue= string.Empty, Owner = _users[1], ObjectToken=@"EtSZs>Dyw{nNz-8)Mrn^o@S-#" },
                new NumberWithSingleTolerancePattern(){ Id=4, Name="Default opeerating temperature", DefaultValue=25, Tolerance=2, SerializedValue=string.Empty, Owner=_users[0], ObjectToken=@"tinx^}w){PZirE=PcG2b0>>`:" },
                new NumberWithDifferentialTolerancePattern() { Id=5,Name="Ice", DefaultValue=1, ToleranceMin=-0.2, ToleranceMax=0.4, SerializedValue=string.Empty, Owner=_users[0],  ObjectToken=@"Z#<^c%AFX}SU!9}uF}[\>YMR."},
            };

            _values = new List<Field>()
            { 
                new StringField(){ Id=0, FieldPattern = _fieldPatterns[0], Value="Full metall jacket shell", SerializedValue = string.Empty, ObjectToken = @",wAIrVL/^${[I9L:C;Fhzb/4l" }, 
                new NumberField(){ Id=1, FieldPattern = _fieldPatterns[1], Value=10, SerializedValue = string.Empty, ObjectToken = @"h@a$z""TiPW-~{dG(GB5#:|d0C" }, 
                new StringField(){ Id=2, FieldPattern = _fieldPatterns[2], Value="Still", SerializedValue = string.Empty, ObjectToken = @"z>(i3Hi.\*7i+b#Gqx`?:FU}`" }, 
                new StringField(){ Id=3, FieldPattern = _fieldPatterns[0], Value="Some Diode", SerializedValue = string.Empty, ObjectToken = @"SAx2RkZQ`!bM~=0Bq@[1><^2Z" }, 
                new NumberField(){ Id=4, FieldPattern = _fieldPatterns[1], Value=1000, SerializedValue = string.Empty, ObjectToken = @"H$%o)Th)*^(oz+>\8Ja@xr[Q{" }, 
                new NumberField(){ Id=5, FieldPattern = _fieldPatterns[3], Value=2.25, SerializedValue = string.Empty, ObjectToken = @"G'ymB8afV+gVaWLxEu^(Rv5>T" }, 
                new NumberWithSingleToleranceField(){ Id=6, FieldPattern = _fieldPatterns[4], Value=100, Tolerance=7, SerializedValue = string.Empty, ObjectToken = @"'q{qaTHRraMm;fGE)D!U'Vr6F" }, 
                new NumberField(){ Id=7, FieldPattern = _fieldPatterns[1], Value=10, SerializedValue = string.Empty, ObjectToken = @"IS4gNP}fK.WK)I1Z2""K""_3NK7" }, 
                new NumberField(){ Id=8, FieldPattern = _fieldPatterns[3], Value=1.25, SerializedValue = string.Empty, ObjectToken = @"#h|6;Jmdf!{]sjkG}Jg|ryDdD" }, 
                new NumberWithDifferentialToleranceField(){ Id=9, FieldPattern = _fieldPatterns[5], Value=0.2, ToleranceMin=-0.02, ToleranceMax=0.01, SerializedValue = string.Empty, ObjectToken = @"x(c6#6%hQKg""P1bheBH5|=7^Y" }, 
            };

            _patterns = new List<Pattern>()
            {
                new Pattern() { Id=0, Name="Gun Shell", Owner = _users[0], FieldPatterns = new List<FieldPattern>() { _fieldPatterns[0], _fieldPatterns[1], _fieldPatterns[2]}, ObjectToken = @"'WpHC:$Q4sM;|>(tj{/ru1FYC" },
                new Pattern() { Id=1, Name="Bipolar transistor", Owner = _users[1], FieldPatterns = new List<FieldPattern>() { _fieldPatterns[0], _fieldPatterns[1], _fieldPatterns[3], _fieldPatterns[4] }, ObjectToken = @"p:t?Q(U]iON{/O,5Kt/0x[;Vt" },
                new Pattern() { Id=2, Name="Diod", Owner = _users[1], FieldPatterns = new List<FieldPattern>() { _fieldPatterns[0], _fieldPatterns[1], _fieldPatterns[3], _fieldPatterns[5] }, ObjectToken = @"Z4W$!u18&Q!.2blw\4mXx[L#]" },
            };

            _items = new List<Item>()
            {
                new Item() { Id = 0, Name = "Gun shell", Pattern = _patterns[0], ObjectToken = @"VOO_LUM21?9Oe3:4&%'N.0`aY" },
                new Item() { Id = 1, Name = "KT-3102", Pattern = _patterns[1], ObjectToken = @"R<sUO\vyHM|-5""gYAlRb\v`%`" },
                new Item() { Id = 2, Name = "IN-4001", Pattern = _patterns[2], ObjectToken = @"?l5HfFmm'y9X\`bAU>e='o$>t" },
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
                    Storages = new List<Storage>(){ _storages[0], _storages[1], _storages[2] } },
                new Depot() {Id = 1, Name = "User depot 1", Adress = _addresses[1], Owner = _users[1], IsPublic = false, ObjectToken=@"M)F;b'4v_xV$~%S.$Ml5/;O7j",
                    Storages = new List<Storage>(){ _storages[3], _storages[4], _storages[5] } },
                new Depot() {Id = 2, Name = "User depot 2", Adress = _addresses[2], Owner = _users[1], IsPublic = false, ObjectToken=@"fB'juP2[~6DGue^40UUV_BT6\",
                    Storages = new List<Storage>(){ _storages[6], _storages[7] } },
                new Depot() {Id = 3, Name = "Empty depot", Owner = _users[1], ObjectToken=@"lB/}{ZZos1obR`'/?/'O!c-oA" },
            };

            PatternDataStorage = new PatternDataStorage(_patterns, _items);
        }

        public IPatternDataStorage PatternDataStorage { get; set; }

        public User GetUserByNameOrByEmail(string name) => _users.FirstOrDefault(u => u.Name.ToUpper() == name || u.Email.ToUpper() == name);

        public IEnumerable<User> GetUserByToken(IEnumerable<string> tokens) => _users.FindAll(u => tokens.Contains(u.UserToken));

        private string GenerateToken(IEnumerable<DepoiTObject> collection)
        {
            string itemToken;
            do
            {
                itemToken = StringGenerator.StringGenerator.GenerateString(_tokenCharset, _tokenLength);
            }
            while (collection.Any(d => d.ObjectToken == itemToken));
            return itemToken;
        }

        public IEnumerable<string> GetUserTokens(IEnumerable<int> id) => _users.FindAll(u => id.Contains(u.Id)).Select(u => u.ObjectToken);

        public string SetUser(User user)
        {
            string itemToken = GenerateToken(_users);

            user.Id = (_depots.Count == 0 ? 0 : _depots.LastOrDefault().Id) + 1;
            user.ObjectToken = itemToken;

            _users.Add((User)user);

            return itemToken;
        }

        public string UpdateUser(User user)
        {
            string itemToken = GenerateToken(_users);

            var databaseItem = _users.FirstOrDefault(u => u.Id == user.Id);

            if (databaseItem != null)
            {
                if (databaseItem.Name != user.Name) databaseItem.Name = user.Name;
                if (databaseItem.Email != user.Email) databaseItem.Email = user.Email;
                if (databaseItem.Avatar != user.Avatar) databaseItem.Avatar = user.Avatar;
                if (databaseItem.PasswordHash != user.PasswordHash) databaseItem.PasswordHash = user.PasswordHash;
                databaseItem.ObjectToken = itemToken;
            }

            return itemToken;
        }

        public void DropUser(int id)
        {
            throw new System.NotImplementedException();
        }
    }
}
