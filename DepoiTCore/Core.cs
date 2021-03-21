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

        public bool GetDepot(int id, IUser user, out IDepot depot)
        {
            if(_repository.GetDepot(id, user, out depot))
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        public bool GetDepots(IUser user, out IEnumerable<IDepot> depots)
        {
            if (_repository.GetDepots(user, out depots))
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
