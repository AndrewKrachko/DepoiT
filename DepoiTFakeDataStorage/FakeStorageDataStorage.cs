using DepoiTItems;
using System;
using System.Collections.Generic;
using System.Text;

namespace DepoiTFakeDataStorage
{
  public partial  class FakeDataStorage
    {
        public void DropStorage(int id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<IStorage> GetStorages(IEnumerable<string> tokens)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<string> GetStorageTokens(IEnumerable<int> id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<string> GetStorageTokensByDepot(IEnumerable<int> depotId)
        {
            throw new NotImplementedException();
        }

        public string SetStorage(IStorage storage)
        {
            throw new NotImplementedException();
        }

        public string UpdateStorage(IStorage storage)
        {
            throw new NotImplementedException();
        }
    }
}
