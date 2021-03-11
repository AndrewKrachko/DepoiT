using System;
using System.Collections.Generic;
using System.Text;

namespace DepoiTItems
{
    public interface IGeoCoordinates : IObject
    {
        double Longitude { get; set; }
        double Latitude { get; set; }
    }
}
