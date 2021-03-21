﻿using DepoiTFakeDataStorage;
using DepoiTItems;
using DepoiTRepository;
using Logger;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DepoitConfigurator
{
    public static class Configurator
    {
        private static string _path = "congig.xml";
        private static IRepository _repository;
        private static ILogger _logger;

        public static IRepository GetRepository()
        {
            var repositoryConfig = DataReader.GetDataproviderConnectionData(_path);

            var dataStorage = GetDataStorage(repositoryConfig);

            if (_repository == null)
            {
                _repository = new Repository(dataStorage);
            }
            else
            {
                _repository.SetDataStorage(dataStorage);
            }

            return _repository;
        }

        private static IDataStorage GetDataStorage(IEnumerable<Tuple<string, string>> repositoryConfig)
        {
            var storageType = repositoryConfig.FirstOrDefault(r => r.Item1 == "Provider").Item2;

            switch (storageType)
            {
                case "MsSql2016":
                    throw new Exception("MsSql 2016 Database Implementation is not implemented");
                case "Fake":
                default:
                    return new FakeDataStorage();
            }
        }

        public static ILogger GetLogger()
        {
            var repositoryConfig = DataReader.GetLoggingLevel(_path);

            if (_logger == null)
            {
                _logger = new Logger.Logger();
            }

            return _logger;
        }
    }
}
