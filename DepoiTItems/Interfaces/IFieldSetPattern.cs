using System;
using System.Collections.Generic;
using System.Text;

namespace DepoiTItems
{
    public interface IFieldSetPattern<T> : IFieldPattern<T>
    {
        List<T> ValueSet { get; set; }
    }
}
