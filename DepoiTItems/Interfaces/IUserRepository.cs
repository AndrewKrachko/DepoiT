namespace DepoiTItems
{
    public interface IUserRepository
    {
        bool GetUserByName(string name, out IUser user);
        bool GetUserByToken(string userToken, out IUser user);
    }
}