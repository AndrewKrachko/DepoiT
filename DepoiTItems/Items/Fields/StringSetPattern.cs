using System;
using System.Collections.Generic;
using System.Text;

namespace DepoiTItems
{
    public class StringSetPattern : StringPattern
    {
        public List<string> StringSet { get; set; }

        public StringSetPattern() : base(FieldTypeEnum.StringValueFromSet)
        {

        }
    }
}
