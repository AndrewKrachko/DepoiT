using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DepoiTItems
{
    public abstract class FieldPattern : SerializableDepoiTObject
    {
        [JsonIgnore]
        public bool IsRequired { get; set; } = false;
        [JsonIgnore]
        public FieldTypeEnum FieldType { get; }
        [JsonIgnore]
        public User Owner { get; set; }

        public FieldPattern(FieldTypeEnum fieldTypeEnum)
        {
            FieldType = fieldTypeEnum;
        }

        public override bool Equals(object obj)
        {
            return obj is FieldPattern pattern
                && base.Equals(obj)
                && IsRequired == pattern.IsRequired
                && FieldType == pattern.FieldType;
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(base.GetHashCode(), IsRequired, FieldType);
        }
    }
}
