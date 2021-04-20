using System.Text.Json.Serialization;

namespace DepoiTItems
{
    public abstract class Field : SerializableDepoiTObject
    {
        [JsonIgnore]
        public FieldPattern FieldPattern { get; set; }

        public abstract bool Validate();
    }
}