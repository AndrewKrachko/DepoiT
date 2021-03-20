using System;
using System.Collections.Generic;
using System.Text;

namespace DepoiTItems
{
    public class Address : IAddress
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Country { get; set; } = "Belarus";
        public string District { get; set; } = "Minsk distr";
        public string City { get; set; } = "Minsk";
        public string Street { get; set; } = "Independensy str.";
        public int Building { get; set; } = 10;
        public string BuildingIndex { get; set; } = "";
        public int Apartment { get; set; } = 14;
        public string ApartmentIndex { get; set; } = "B";
    }
}
