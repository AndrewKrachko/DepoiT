namespace DepoiTItems
{
    public interface IUser : IObject
    {
        string Email { get; set; }
        string Password { get; set; }
        string UserToken { get; set; }
        Photo Avatar { get; set; }
    }
}