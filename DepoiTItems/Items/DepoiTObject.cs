using System;
using System.Text.Json.Serialization;

namespace DepoiTItems
{
    public class DepoiTObject : IObject
    {
        [JsonIgnore]
        public int Id { get; set; }
        [JsonIgnore]
        public string Name { get; set; }
        [JsonIgnore]
        public string ObjectToken { get; set; }

        public override bool Equals(object obj)
        {
            return obj is DepoiTObject depoitObject &&
                   Id == depoitObject.Id &&
                   Name == depoitObject.Name &&
                   ObjectToken == depoitObject.ObjectToken;
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(Id, Name, ObjectToken);
        }
    }
}