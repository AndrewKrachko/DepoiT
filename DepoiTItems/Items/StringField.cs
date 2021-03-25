using System;
using System.Collections.Generic;
using System.Text;

namespace DepoiTItems
{
    public class StringField : IField<string>
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Value { get; set; }
        public bool Validate { get; set; }
        public IFieldPattern<string> FieldPattern { get; set; }
        public string ObjectToken { get; set; }
    }
}
