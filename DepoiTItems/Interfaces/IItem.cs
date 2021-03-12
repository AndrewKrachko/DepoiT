using System.Collections.Generic;

namespace DepoiTItems
{
    public interface IItem : IObject
    {
        IPattern Pattern { get; set; }
        IEnumerable<IField> Fields { get; set; }
    }
}