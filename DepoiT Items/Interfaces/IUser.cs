namespace DepoiTItems
{
    public interface IUser : IItem
    {
        string Email { get; set; }
        string Password { get; set; }
    }
}