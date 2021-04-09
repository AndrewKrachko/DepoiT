using System;

namespace DepoiTItems
{
    public class NumberWithDifferentialTolerancePattern : NumberPattern
    {
        public double ToleranceMin { get; set; }
        public double ToleranceMax { get; set; }

        public override bool Equals(object obj)
        {
            return obj is NumberWithDifferentialTolerancePattern tolerance
                && base.Equals(tolerance)
                && IsRequired == tolerance.IsRequired
                && FielddType == tolerance.FielddType
                && DefaultValue == tolerance.DefaultValue
                && ToleranceMin == tolerance.ToleranceMin
                && ToleranceMax == tolerance.ToleranceMax;
        }

        public override int GetHashCode()
        {
            HashCode hash = new HashCode();
            hash.Add(base.GetHashCode());
            hash.Add(IsRequired);
            hash.Add(FielddType);
            hash.Add(DefaultValue);
            hash.Add(ToleranceMin);
            hash.Add(ToleranceMax);
            return hash.ToHashCode();
        }
    }
}
