namespace DepoiTItems
{
    public class Field<T> : DepoiTObject, IField<T>
    {
        public FieldPattern<T> FieldPattern { get; set; }
        public T Value { get; set; }
        public bool Validate { get; set; }
    }
}