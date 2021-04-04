using System.Collections.Generic;

namespace DepoiTItems
{
    public interface IFieldSetPattern<T> : IFieldPattern<T>
    {
        List<T> ValueSet { get; set; }
    }
}
