namespace DepoiTItems
{
    internal interface ISerializable
    {
        public abstract void DeserializeValue();

        public abstract void SerializeValue();
    }
}