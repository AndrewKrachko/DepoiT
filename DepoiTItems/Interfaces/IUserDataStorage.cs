namespace DepoiTItems
{
    public interface IUserDataStorage
    {
        User GetUserByName(string name);
        User GetUserByToken(string userToken);
    }
}