using System.Collections.Generic;

namespace DepoiTItems
{
    public class Pattern : DepoiTObject
    {
        public List<FieldPattern> FieldPatterns { get; set; }
        public User Owner { get; set; }
    }
}
