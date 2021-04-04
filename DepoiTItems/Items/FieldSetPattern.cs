using System;
using System.Collections.Generic;

namespace DepoiTItems
{
    public class FieldSetPattern<T> : FieldPattern<T>, IFieldSetPattern<T>
    {
        public List<T> ValueSet { get; set; }

        public override bool Equals(object obj)
        {
            return obj is FieldSetPattern<T> pattern &&
                   base.Equals(obj) &&
                   IsRequired == pattern.IsRequired &&
                   FielddType == pattern.FielddType &&
                   EqualityComparer<T>.Default.Equals(DefaultValue, pattern.DefaultValue) &&
                   EqualityComparer<List<T>>.Default.Equals(ValueSet, pattern.ValueSet);
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(base.GetHashCode(), IsRequired, FielddType, DefaultValue, ValueSet);
        }
    }
}
