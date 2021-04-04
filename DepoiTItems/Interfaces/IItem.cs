using System.Collections.Generic;

namespace DepoiTItems
{
    public interface IItem : IObject
    {
        Pattern Pattern { get; set; }
        List<Field<object>> Fields { get; set; }
    }
}