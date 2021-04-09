using System;
using System.Collections.Generic;
using System.Text;
using System.Text.Json.Serialization;

namespace DepoiTItems
{
    public abstract class SerializableDepoiTObject : DepoiTObject, ISerializable
    {
        [JsonIgnore]
        public string SerializedValue { get; set; }

        public abstract void DeserializeValue();

        public abstract void SerializeValue();
    }
}
