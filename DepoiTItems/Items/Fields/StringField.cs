using System;
using System.Collections.Generic;
using System.Text.Json;

namespace DepoiTItems
{
    public class StringField : Field
    {
        public string ValueString { get; set; }

        public override void DeserializeValue()
        {
            ValueString = JsonSerializer.Deserialize<StringField>(SerializedValue).ValueString;
        }

        public override bool Equals(object obj)
        {
            return obj is StringField field
                && base.Equals(obj)
                && ValueString == field.ValueString
                && EqualityComparer<FieldPattern>.Default.Equals(FieldPattern, field.FieldPattern);
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(base.GetHashCode(), ValueString, FieldPattern);
        }

        public override void SerializeValue()
        {
            SerializedValue = JsonSerializer.Serialize(this);
        }

        public override bool Validate()
        {
            throw new NotImplementedException();
        }
    }
}
