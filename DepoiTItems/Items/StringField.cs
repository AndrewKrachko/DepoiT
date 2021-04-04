using System;
using System.Collections.Generic;
using System.Text;

namespace DepoiTItems
{
    public class StringField : DepoiTObject, IField<string>
    {
        public string Value { get; set; }
        public bool Validate { get; set; }
        public FieldPattern<string> FieldPattern { get; set; }

        public override bool Equals(object obj)
        {
            return obj is StringField field
                && base.Equals(obj)
                && Value == field.Value
                && Validate == field.Validate
                && EqualityComparer<FieldPattern<string>>.Default.Equals(FieldPattern, field.FieldPattern);
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(base.GetHashCode(), Value, Validate, FieldPattern);
        }
    }
}
