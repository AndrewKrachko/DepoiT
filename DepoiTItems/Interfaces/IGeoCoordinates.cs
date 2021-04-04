namespace DepoiTItems
{
    public interface IGeoCoordinates : IObject
    {
        double Longitude { get; set; }
        double Latitude { get; set; }
    }
}
