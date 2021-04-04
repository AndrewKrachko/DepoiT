namespace DepoiTItems
{
    public interface IFieldPattern<T> : IObject
    {
        bool IsRequired { get; set; }
        FieldTypeEnum FielddType { get; set; }
        T DefaultValue { get; set; }
    }
}