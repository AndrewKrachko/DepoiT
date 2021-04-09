using System.Collections.Generic;

namespace DepoiTItems
{
    public interface IPatternDataStorage
    {
        IEnumerable<string> GetPatternTokens(IEnumerable<int> id);
        string GetPatternTokenByItem(IEnumerable<int> itemId);
        IEnumerable<Pattern> GetPatterns(IEnumerable<string> tokens);

        string SetPattern(Pattern patern);
        string UpdatePattern(Pattern patern);
        void DropPattern(int id);
    }
}