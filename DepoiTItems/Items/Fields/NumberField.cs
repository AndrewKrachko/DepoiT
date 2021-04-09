using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace DepoiTItems
{
    public class NumberField : Field
    {
        public double Value { get; set; }

        public override void DeserializeValue()
        {
            Value = JsonSerializer.Deserialize<NumberField>(SerializedValue).Value;
        }

        public override bool Equals(object obj)
        {
            return obj is NumberField field &&
                   base.Equals(obj) &&
                   Value == field.Value &&                  
                   EqualityComparer<FieldPattern>.Default.Equals(FieldPattern, field.FieldPattern);
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(base.GetHashCode(), Value, FieldPattern);
        }

        public override void SerializeValue()
        {
            SerializedValue = JsonSerializer.Serialize(this);
        }

        public override bool Validate()
        {
            return Value != double.NaN && FieldPattern is NumberPattern;
        }
    }
}
