namespace DepoiTItems
{
    public interface IObject
    {
        int Id { get; set; }
        string Name { get; set; }
        string ObjectToken { get; set; }
    }
}
