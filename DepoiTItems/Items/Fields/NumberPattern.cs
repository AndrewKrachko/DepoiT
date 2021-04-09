using System.Text.Json;

namespace DepoiTItems
{
    public class NumberPattern : FieldPattern
    {
        public double DefaultValue { get; set; }

        public NumberPattern(): base(FieldTypeEnum.Number)
        {

        }

        protected NumberPattern(FieldTypeEnum fieldTypeEnum): base(fieldTypeEnum)
        {

        }

        public override void DeserializeValue()
        {
            DefaultValue = JsonSerializer.Deserialize<NumberPattern>(SerializedValue).DefaultValue;
        }

        public override void SerializeValue()
        {
            SerializedValue = JsonSerializer.Serialize(this);
        }
    }
}