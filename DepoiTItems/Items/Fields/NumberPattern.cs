using System.Text.Json;

namespace DepoiTItems
{
    public class NumberPattern : FieldPattern
    {
        public double DefaultValue { get; set; }

        public override void DeserializeValue()
        {
            DefaultValue = JsonSerializer.Deserialize<NumberPattern>(SerializedValue).DefaultValue;
        }

        public override void SerializeValue()
        {
            base.SerializeValue();
        }
    }
}