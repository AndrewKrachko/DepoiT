using System;
using System.Collections.Generic;

namespace DepoiTItems
{
    public class Depot : IDepot
    {
        public IAddress Adress { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }
        public IGeoCoordinates Coordinates { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }
        public IEnumerable<IStorage> Storages { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }
        public bool IsPublic { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }
        public IUser Owner { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }
        public int Id { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }
        public string Name { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }
    }
}
