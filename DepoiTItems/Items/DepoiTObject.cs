using System;

namespace DepoiTItems
{
    public class DepoiTObject : IObject
    {
        public int Id { get; set; }
        public string Name { get; set; }
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