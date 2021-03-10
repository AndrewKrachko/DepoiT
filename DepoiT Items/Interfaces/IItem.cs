using System;
using System.Collections.Generic;
using System.Text;

namespace DepoiTItems
{
    public interface IItem
    {
        int Id { get; set; }
        string Name { get; set; }
    }
}
