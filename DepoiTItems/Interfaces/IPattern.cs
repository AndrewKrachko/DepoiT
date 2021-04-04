using System.Collections.Generic;

namespace DepoiTItems
{
    public interface IPattern : IObject
    {
        IEnumerable<IFieldPattern<object>> FieldPatterns { get; set; }
    }
}