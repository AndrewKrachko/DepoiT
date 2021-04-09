using System;
using System.Collections.Generic;
using System.Text;

namespace DepoiTItems
{
    public class NumberWithSingleTolerancePattern : NumberPattern
    {
        public double Tolerance { get; set; }

        public NumberWithSingleTolerancePattern(): base(FieldTypeEnum.NumberWithTolerance)
        {
            
        }
    }
}
