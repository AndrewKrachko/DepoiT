namespace DepoiTItems
{
    public class NumberWithSingleTolerancePattern : NumberPattern
    {
        public double Tolerance { get; set; }

        public NumberWithSingleTolerancePattern() : base(FieldTypeEnum.NumberWithTolerance)
        {

        }
    }
}
