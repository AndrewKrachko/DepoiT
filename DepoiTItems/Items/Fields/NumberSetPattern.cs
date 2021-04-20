using System;
using System.Collections.Generic;

namespace DepoiTItems
{
    public class NumberSetPattern : NumberPattern
    {
        public List<double> ValueSet { get; set; }

        public NumberSetPattern() : base(FieldTypeEnum.NumberFromSet)
        {

        }

        public override bool Equals(object obj)
        {
            return obj is NumberSetPattern pattern &&
                   base.Equals(obj) &&
                   IsRequired == pattern.IsRequired &&
                   FieldType == pattern.FieldType &&
                   DefaultValue == pattern.DefaultValue &&
                   EqualityComparer<List<double>>.Default.Equals(ValueSet, pattern.ValueSet);
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(base.GetHashCode(), IsRequired, FieldType, DefaultValue, ValueSet);
        }
    }
}
