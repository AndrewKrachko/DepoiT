using System;
using System.Collections.Generic;
using System.Text;

namespace DepoiTItems
{
    public interface IAddress : IObject
    {
        string Country { get; set; }
        string District { get; set; }
        string City { get; set; }
        string Street { get; set; }
        int Building { get; set; }
        string BuildingIndex { get; set; }
        int Apartment { get; set; }
        string ApartmentIndex { get; set; }
    }
}
