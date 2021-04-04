namespace DepoiTItems
{
    public interface IFieldWithTolerancePattern : IFieldPattern<double>
    {
        double ToleranceMin { get; set; }
        double ToleranceMax { get; set; }
    }
}
