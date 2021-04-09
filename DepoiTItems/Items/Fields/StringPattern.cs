using System;
using System.Collections.Generic;
using System.Text;

namespace DepoiTItems
{
    public class StringPattern : FieldPattern
    {
        public string DefaultValue { get; set; }

        public StringPattern() : base(FieldTypeEnum.StringValue)
        {

        }

        protected StringPattern(FieldTypeEnum fieldTypeEnum): base(fieldTypeEnum)
        {

        }

        public override void DeserializeValue()
        {
            throw new NotImplementedException();
        }

        public override void SerializeValue()
        {
            throw new NotImplementedException();
        }
    }
}
