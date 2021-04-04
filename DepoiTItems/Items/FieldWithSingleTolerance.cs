using System;

namespace DepoiTItems
{
    public class FieldWithSingleTolerance : FieldPattern<double>, IFieldWithTolerancePattern
    {
        double _tolerance;
        public double ToleranceMin { get => _tolerance; set => _tolerance = value; }
        public double ToleranceMax { get => _tolerance; set => _tolerance = value; }

        public override bool Equals(object obj)
        {
            return obj is FieldWithSingleTolerance tolerance
                && base.Equals(tolerance)
                && _tolerance == tolerance._tolerance
                && ToleranceMin == tolerance.ToleranceMin
                && ToleranceMax == tolerance.ToleranceMax;
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(base.GetHashCode(), _tolerance, ToleranceMin, ToleranceMax);
        }
    }
}
