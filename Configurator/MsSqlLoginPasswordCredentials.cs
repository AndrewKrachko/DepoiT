namespace DepoitConfigurator
{
    public class MsSqlLoginPasswordCredentials
    {
        private static string _loginType = "User Id";
        private static string _passwordType = "Password";

        public string Login { get; set; }
        public string Password { get; set; }

        public string GetParametersString() => $"{_loginType}={Login};{_passwordType}={Password};";
    }
}
