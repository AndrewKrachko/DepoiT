using System;

namespace DepoiTItems
{
    public class GeoCoordinates : DepoiTObject, IGeoCoordinates
    {
        public double Longitude { get; set; }
        public double Latitude { get; set; }

        public override bool Equals(object obj)
        {
            return obj is GeoCoordinates coordinates
                && base.Equals(coordinates)
                && Longitude == coordinates.Longitude
                && Latitude == coordinates.Latitude;
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(Longitude, Latitude);
        }
    }
}