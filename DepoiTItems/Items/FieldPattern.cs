using System;
using System.Collections.Generic;
using System.Text;

namespace DepoiTItems
{
    public class FieldPattern<T> : IFieldPattern<T>
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public bool IsRequired { get; set; }
        public FieldTypeEnum FielddType { get; set; }
        public T DefaultValue { get; set; }
        public string ObjectToken { get; set; }
    }
}
