using DepoiTEFDataStorage;
using DepoiTFakeDataStorage;
using DepoiTItems;
using DepoiTRepository;
using Logger;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Xml.Linq;

namespace DepoitConfigurator
{
    public static class Configurator
    {
        private static string _path = "config.xml";
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
                    return new EFDataStorage(GetMsSqlConnectionData(repositoryConfig));
                case "Fake":
                default:
                    return new FakeDataStorage();
            }
        }

        private static IConnectionData GetMsSqlConnectionData(IEnumerable<Tuple<string, string>> repositoryConfig)
        {
            var provider = new ServerProvider() { Name = repositoryConfig.First(cfg => cfg.Item1 == "Server").Item2 };
            var database = new DataBaseStorage() { Name = repositoryConfig.First(cfg => cfg.Item1 == "DataBase").Item2 };
            var credentials = new MsSqlLoginPasswordCredentials() { Login = repositoryConfig.First(cfg => cfg.Item1 == "Login").Item2, Password = repositoryConfig.First(cfg => cfg.Item1 == "Password").Item2 };

            return new MsSqlConnectionData(provider, database, credentials);
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
