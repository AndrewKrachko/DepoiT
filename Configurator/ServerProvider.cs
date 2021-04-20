namespace DepoitConfigurator
{
    public class ServerProvider
    {
        private static string _type = "Server";
        public string Name { get; set; }

        public string GetParametersString() => $"{_type}={Name};";
    }
}
