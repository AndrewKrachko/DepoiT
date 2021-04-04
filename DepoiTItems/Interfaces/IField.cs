using System.Collections.Generic;

namespace DepoiTItems
{
    public interface IField<T> : IObject
    {
        FieldPattern<T> FieldPattern { get; set; }
        T Value { get; set; }
        bool Validate { get; set; }
    }
}