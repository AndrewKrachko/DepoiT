using System;
using System.Collections.Generic;
using System.Text;

namespace DepoiTItems
{
    public class FieldWithDifferentialTolerance : FieldPattern<double>, IFieldWithTolerancePattern
    {
        public double ToleranceMin { get; set; }
        public double ToleranceMax { get; set; }

        public override bool Equals(object obj)
        {
            return obj is FieldWithDifferentialTolerance tolerance
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
