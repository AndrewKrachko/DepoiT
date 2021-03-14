using System.Collections.Generic;

namespace DepoiTItems
{
    public interface IItem : IObject
    {
        IPattern Pattern { get; set; }
        IEnumerable<IField<object>> Fields { get; set; }
    }
}