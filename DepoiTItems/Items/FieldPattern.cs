using System;
using System.Collections.Generic;

namespace DepoiTItems
{
    public class FieldPattern<T> : DepoiTObject, IFieldPattern<T>
    {
        public bool IsRequired { get; set; }
        public FieldTypeEnum FielddType { get; set; }
        public T DefaultValue { get; set; }

        public override bool Equals(object obj)
        {
            return obj is FieldPattern<T> pattern
                && base.Equals(obj)
                && IsRequired == pattern.IsRequired
                && FielddType == pattern.FielddType
                && EqualityComparer<T>.Default.Equals(DefaultValue, pattern.DefaultValue);
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(base.GetHashCode(), IsRequired, FielddType, DefaultValue);
        }
    }
}
