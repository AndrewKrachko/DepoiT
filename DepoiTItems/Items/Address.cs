using System;
using System.Collections.Generic;
using System.Text;

namespace DepoiTItems
{
    public class Address : DepoiTObject, IAddress
    {
        public string Country { get; set; } = "Belarus";
        public string District { get; set; } = "Minsk distr";
        public string City { get; set; } = "Minsk";
        public string Street { get; set; } = "Independensy str.";
        public int Building { get; set; } = 10;
        public string BuildingIndex { get; set; } = "";
        public int Apartment { get; set; } = 14;
        public string ApartmentIndex { get; set; } = "B";

        public override bool Equals(object obj)
        {
            return obj is Address address
                && base.Equals(obj)
                && Country == address.Country
                && District == address.District
                && City == address.City
                && Street == address.Street
                && Building == address.Building
                && BuildingIndex == address.BuildingIndex
                && Apartment == address.Apartment
                && ApartmentIndex == address.ApartmentIndex;
        }

        public override int GetHashCode()
        {
            HashCode hash = new HashCode();
            hash.Add(base.GetHashCode());
            hash.Add(Country);
            hash.Add(District);
            hash.Add(City);
            hash.Add(Street);
            hash.Add(Building);
            hash.Add(BuildingIndex);
            hash.Add(Apartment);
            hash.Add(ApartmentIndex);
            return hash.ToHashCode();
        }

        public static bool operator ==(Address objectA, Address objectB) => objectA is Address && objectB is Address && objectA.Equals(objectB);
        public static bool operator !=(Address objectA, Address objectB) => objectA is Address && objectB is null
            || objectA is null && objectB is Address
            || objectA is Address && objectB is Address && !objectA.Equals(objectB);
    }
}
