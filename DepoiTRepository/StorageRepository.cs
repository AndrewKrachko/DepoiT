using DepoiTItems;
using System;
using System.Collections.Generic;
using System.Text;

namespace DepoiTRepository
{
    public partial class Repository
    {
        public bool GetStorages(IEnumerable<int> id, out IEnumerable<IStorage> storages)
        {
            throw new NotImplementedException();
        }

        public bool GetStoragesByDepot(int depotId, out IEnumerable<IStorage> storages)
        {
            throw new NotImplementedException();
        }

        public bool SetStorage(IStorage storage, out IStorage createdStorage)
        {
            throw new NotImplementedException();
        }

        public bool UpdateStorage(IStorage storage, out IStorage createdStorage)
        {
            throw new NotImplementedException();
        }

        public bool DropStorage(int id)
        {
            throw new NotImplementedException();
        }
    }
}
