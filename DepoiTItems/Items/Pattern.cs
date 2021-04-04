using System;
using System.Collections.Generic;
using System.Text;

namespace DepoiTItems
{
    public class Pattern : DepoiTObject, IPattern
    {
        public List<FieldPattern<object>> FieldPatterns { get; set; }
    }
}
