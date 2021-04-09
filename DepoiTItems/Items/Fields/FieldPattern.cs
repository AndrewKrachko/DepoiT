using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DepoiTItems
{
    public abstract class FieldPattern : SerializableDepoiTObject
    {
        [JsonIgnore]
        public bool IsRequired { get; set; }
        [JsonIgnore]
        public FieldTypeEnum FielddType { get; set; }

        public override void DeserializeValue()
        {
            throw new NotImplementedException();
        }

        public override bool Equals(object obj)
        {
            return obj is FieldPattern pattern
                && base.Equals(obj)
                && IsRequired == pattern.IsRequired
                && FielddType == pattern.FielddType;
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(base.GetHashCode(), IsRequired, FielddType);
        }

        public override void SerializeValue()
        {
            throw new NotImplementedException();
        }
    }
}
