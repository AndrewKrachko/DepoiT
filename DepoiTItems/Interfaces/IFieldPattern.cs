using System.Collections.Generic;

namespace DepoiTItems
{
    public interface IFieldPattern<T> : IObject
    {
        bool IsRequired { get; set; }
        FielddTypeEnum FielddType { get; set; }
        T DefaultValue { get; set; }
    }
}