using System;
using System.Collections.Generic;
using System.Text;

namespace DepoiTItems
{
    public interface IFieldSetPattern<T> : IFieldPattern<T>
    {
        IEnumerable<T> ValueSet { get; set; }
    }
}
