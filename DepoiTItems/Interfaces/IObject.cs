using System;
using System.Collections.Generic;
using System.Text;

namespace DepoiTItems
{
    public interface IObject
    {
        int Id { get; set; }
        string Name { get; set; }
    }
}
