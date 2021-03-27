using DepoiTItems;
using System;
using System.Collections.Generic;
using System.Text;

namespace DepoiTItems
{
    public interface IDataStorage
    {
        IUser GetUserByName(string name);
        IUser GetUserByToken(string userToken);
        
        IEnumerable<string> GetDepotTokens(IEnumerable<int> id);
        IEnumerable<string> GetDepotTokensByUser(IEnumerable<int> userId);
        IEnumerable<IDepot> GetDepots(IEnumerable<string> tokens);
        
        string SetDepot(IDepot depot);

        string UpdateDepot(IDepot depot);
        
        void DropDepot(int id);
    }
}
