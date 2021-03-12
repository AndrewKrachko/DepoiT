using System;
using System.Collections.Generic;
using System.Text;

namespace DepoiTItems
{
    public class FieldSetPattern<T> : FieldPattern<T>, IFieldSetPattern<T>
    {
        public IEnumerable<T> ValueSet { get; set; }
    }
}
