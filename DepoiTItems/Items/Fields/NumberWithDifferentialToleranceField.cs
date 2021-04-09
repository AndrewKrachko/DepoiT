using System.Text.Json;

namespace DepoiTItems
{
    public class NumberWithDifferentialToleranceField : NumberField
    {
        public double ToleranceMin { get; set; }
        public double ToleranceMax { get; set; }

        public override void DeserializeValue()
        {
            ToleranceMin = JsonSerializer.Deserialize<NumberWithDifferentialToleranceField>(SerializedValue).ToleranceMin;
            ToleranceMax = JsonSerializer.Deserialize<NumberWithDifferentialToleranceField>(SerializedValue).ToleranceMax;
        }

        public override void SerializeValue()
        {
            SerializedValue = JsonSerializer.Serialize(this);
        }
    }
}
