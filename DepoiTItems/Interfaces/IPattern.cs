using System.Collections.Generic;

namespace DepoiTItems
{
    public interface IPattern : IObject
    {
        List<FieldPattern<object>> FieldPatterns { get; set; }
    }
}