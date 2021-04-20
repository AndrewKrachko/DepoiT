using DepoiTItems;

namespace DepoitConfigurator
{
    public class MsSqlConnectionData : IConnectionData
    {
        public ServerProvider Provider { get; set; }
        public DataBaseStorage Storage { get; set; }
        public MsSqlLoginPasswordCredentials Credentials { get; set; }
        public EmptySecuritySettings SecuritySettings { get; set; }
        public EmptyOptions Options { get; set; }

        public MsSqlConnectionData(ServerProvider provider, DataBaseStorage storage)
        {
            Provider = provider;
            Storage = storage;
            Credentials = new MsSqlLoginPasswordCredentials();
            SecuritySettings = new EmptySecuritySettings();
            Options = new EmptyOptions();
        }

        public MsSqlConnectionData(ServerProvider provider, DataBaseStorage storage, MsSqlLoginPasswordCredentials credetials) : this(provider, storage)
        {
            Credentials = credetials;
        }

        public string GetConnectionString()
        {
            return $"{Provider.GetParametersString()}{Storage.GetParametersString()}{Credentials.GetParametersString()}{SecuritySettings.GetParametersString()}{Options.GetParametersString()}";
        }
    }
}
