using System.Collections.Generic;

namespace DepoiTItems
{
    public interface IStorageDataStorage
    {
        IEnumerable<string> GetStorageTokens(IEnumerable<int> id);
        IEnumerable<string> GetStorageTokensByDepot(IEnumerable<int> depotId);
        IEnumerable<IStorage> GetStorages(IEnumerable<string> tokens);

        string SetStorage(IStorage storage);
        string UpdateStorage(IStorage storage);
        void DropStorage(int id);
    }
}