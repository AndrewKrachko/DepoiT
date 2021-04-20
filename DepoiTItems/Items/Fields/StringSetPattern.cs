using System.Collections.Generic;

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
