using System;
using System.Collections.Generic;

namespace DepoiTItems
{
    public class NumberField : DepoiTObject, IField<double>
    {
        public double Value { get; set; }
        public bool Validate { get; set; }
        public FieldPattern<double> FieldPattern { get; set; }

        public override bool Equals(object obj)
        {
            return obj is NumberField field &&
                   base.Equals(obj) &&
                   Value == field.Value &&
                   Validate == field.Validate &&
                   EqualityComparer<IFieldPattern<double>>.Default.Equals(FieldPattern, field.FieldPattern);
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(base.GetHashCode(), Value, Validate, FieldPattern);
        }
    }
}
