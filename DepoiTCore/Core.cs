﻿using DepoitConfigurator;
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
