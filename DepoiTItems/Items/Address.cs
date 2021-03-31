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
        public string ObjectToken { get; set; }

        public override bool Equals(object obj)
        {
            return obj is Address address &&
                   Id == address.Id &&
                   Name == address.Name &&
                   Country == address.Country &&
                   District == address.District &&
                   City == address.City &&
                   Street == address.Street &&
                   Building == address.Building &&
                   BuildingIndex == address.BuildingIndex &&
                   Apartment == address.Apartment &&
                   ApartmentIndex == address.ApartmentIndex &&
                   ObjectToken == address.ObjectToken;
        }

        public override int GetHashCode()
        {
            HashCode hash = new HashCode();
            hash.Add(Id);
            hash.Add(Name);
            hash.Add(Country);
            hash.Add(District);
            hash.Add(City);
            hash.Add(Street);
            hash.Add(Building);
            hash.Add(BuildingIndex);
            hash.Add(Apartment);
            hash.Add(ApartmentIndex);
            hash.Add(ObjectToken);
            return hash.ToHashCode();
        }

        public static bool operator ==(Address addressA, Address addressB) => addressA.Equals(addressB);
        public static bool operator !=(Address addressA, Address addressB) => !addressA.Equals(addressB);
    }
}
