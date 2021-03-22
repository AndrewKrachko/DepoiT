using System;
using System.Collections.Generic;
using System.Linq;
using System.Xml.Linq;

namespace DepoitConfigurator
{
    static class DataReader
    {
        public static IEnumerable<Tuple<string, string>> GetDataproviderConnectionData(string path)
        {
            var _configFile = XDocument.Load(path);

            return _configFile.Element("Config").Element("DataProvider").Elements().Select(e => new Tuple<string, string>(e.Name.ToString(), e.Value));
        }

        public static string GetLoggingLevel(string path)
        {
            var _configFile = XDocument.Load(path);

            return _configFile.Element("Config").Element("LoggingLevel").Value;
        }
    }
}
