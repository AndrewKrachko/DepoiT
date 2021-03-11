namespace DepoiTItems
{
    public interface IItem : IObject
    {
        IType Type { get; set; }
    }
}