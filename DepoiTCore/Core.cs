using DepoitConfigurator;
using DepoiTItems;
using Logger;
using System;
using System.Collections.Generic;

namespace DepoiTCore
{
    public class Core : ICore
    {
        private readonly IRepository _repository;
        private readonly ILogger _logger;

        public Core()
        {
            _repository = Configurator.GetRepository();
            _logger = Configurator.GetLogger();
        }

        public bool GetDepot(int id, string userToken, out IDepot depot)
        {
            if (_repository.GetDepot(id, userToken, out depot))
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        public bool GetDepots(string userToken, out IEnumerable<IDepot> depots)
        {
            if (_repository.GetDepots(userToken, out depots))
            {
                return true;
            }
            else
            {
                return false;
            }
        }
    }
}
