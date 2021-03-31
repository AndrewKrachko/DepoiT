﻿using System.Collections.Generic;

namespace DepoiTItems
{
    public interface IDepotDataStorage
    {
        IEnumerable<string> GetDepotTokens(IEnumerable<int> id);
        IEnumerable<string> GetDepotTokensByUser(IEnumerable<int> userId);
        IEnumerable<IDepot> GetDepots(IEnumerable<string> tokens);
        string SetDepot(IDepot depot);
        string UpdateDepot(IDepot depot);
        void DropDepot(int id);
        string AddStogaresToDepot(int depotId, IEnumerable<IStorage> storages);
        string RemoveStoragesFromDepot(int depotId, IEnumerable<int> ids);
        string[] MoveStoragesBetweenDepots(IEnumerable<int> storageIds, int sourceDepot, int recepientDepot);
    }
}