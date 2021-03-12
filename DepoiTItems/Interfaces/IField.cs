namespace DepoiTItems
{
    public interface IField<T> : IObject
    {
        IFieldPattern<T> FieldPattern { get; set; }
        T Value { get; set; }
        bool Validate { get; set; }
    }
}