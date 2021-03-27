using DepoitConfigurator;
using DepoiTItems;
using Logger;
using System;
using System.Collections.Generic;
using System.Linq;

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

        public bool DropDepot(int id)
        {
            return _repository.DropDepot(id);
        }

        public bool GetDepot(int id, out IDepot depot)
        {
            if (_repository.GetDepots(new[] { id }, out var depots))
            {
                depot = depots.FirstOrDefault();
                return true;
            }
            else
            {
                depot = null;
                return false;
            }
        }

        public bool GetDepotsByUser(int userId, out IEnumerable<IDepot> depots)
        {
            if (_repository.GetDepotsByUser(userId, out depots))
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        public bool SetDepot(IDepot depot, out IDepot createdDepot)
        {
            var userToken = depot.Owner.UserToken;

            if (_repository.GetUserByToken(userToken, out var user))
            {
                depot.Owner = user;

                if (_repository.SetDepot(depot, out createdDepot))
                {
                    return true;
                }
            }

            createdDepot = null;
            return false;
        }
    }
}
