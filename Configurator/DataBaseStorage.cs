namespace DepoitConfigurator
{
    public class DataBaseStorage
    {
        private static string _type = "Database";
        public string Name { get; set; }

        public string GetParametersString() => $"{_type}={Name};";
    }
}
