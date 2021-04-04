using System;
using System.Collections.Generic;
using System.Text;

namespace DepoiTItems
{
    public interface IPhoto : IObject
    {
        public string Url { get; set; }
    }
}
