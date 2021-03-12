using System;
using System.Collections.Generic;
using System.Text;

namespace DepoiTItems
{
    public class FieldWithSingleTolerance : FieldPattern<double>, IFieldWithTolerancePattern
    {
        double _tolerance;
        public double ToleranceMin { get => _tolerance; set => _tolerance = value; }
        public double ToleranceMax { get => _tolerance; set => _tolerance = value; }
    }
}
