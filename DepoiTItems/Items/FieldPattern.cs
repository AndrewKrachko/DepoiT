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
        public FielddTypeEnum FielddType { get; set; }
        public T DefaultValue { get; set; }
    }
}
