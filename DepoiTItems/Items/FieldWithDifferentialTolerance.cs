using System;
using System.Collections.Generic;
using System.Text;

namespace DepoiTItems
{
    public class FieldWithDifferentialTolerance : FieldPattern<double>, IFieldWithTolerancePattern
    {
        public double ToleranceMin { get; set; }
        public double ToleranceMax { get; set; }
    }
}
