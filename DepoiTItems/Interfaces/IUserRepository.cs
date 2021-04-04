namespace DepoiTItems
{
    public interface IUserRepository
    {
        bool GetUserByName(string name, out User user);
        bool GetUserByToken(string userToken, out User user);
    }
}