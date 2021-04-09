using System;
using System.Collections.Generic;

namespace DepoiTItems
{
    public class NumberSetPattern : NumberPattern
    {
        public List<double> ValueSet { get; set; }

        public override bool Equals(object obj)
        {
            return obj is NumberSetPattern pattern &&
                   base.Equals(obj) &&
                   IsRequired == pattern.IsRequired &&
                   FielddType == pattern.FielddType &&
                   DefaultValue == pattern.DefaultValue &&
                   EqualityComparer<List<double>>.Default.Equals(ValueSet, pattern.ValueSet);
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(base.GetHashCode(), IsRequired, FielddType, DefaultValue, ValueSet);
        }
    }
}
