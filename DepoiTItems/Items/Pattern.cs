using System.Collections.Generic;

namespace DepoiTItems
{
    public class Pattern : DepoiTObject, IPattern
    {
        public List<FieldPattern<object>> FieldPatterns { get; set; }
    }
}
