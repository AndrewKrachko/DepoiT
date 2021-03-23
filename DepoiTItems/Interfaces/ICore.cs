using System;
using System.Collections.Generic;
using System.Text;

namespace DepoiTItems
{
    public interface ICore
    {
        bool GetDepot(int id, string userToken, out IDepot depot);
        bool GetDepots(string userToken, out IEnumerable<IDepot> depots);
    }
}
