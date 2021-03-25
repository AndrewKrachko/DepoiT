using System;
using System.Collections.Generic;
using System.Text;

namespace DepoiTItems
{
    public class NumberField : IField<double>
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public double Value { get; set; }
        public bool Validate { get; set; }
        public IFieldPattern<double> FieldPattern { get; set; }
        public string ObjectToken { get; set; }
    }
}
