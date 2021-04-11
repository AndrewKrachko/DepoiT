using System.Threading.Tasks;

namespace DepoiTItems
{
    public interface IUserCore
    {
        bool GetUser(int id, out User user);
        bool GetUserByNameOrEmail(string value, out User user);
        bool SetUser(User user);
        bool UpdateUser(User user, out User updatedUser);
        bool DropUser(int userId);
    }
}