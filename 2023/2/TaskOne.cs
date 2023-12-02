namespace _2;

internal class TaskOne
{
    public readonly Dictionary<Colors, int> BagConfig = new()
    {
        {Colors.Red, 12},
        {Colors.Green, 13},
        {Colors.Blue, 14}
    };
    public bool IsGamePossible(List<Dictionary<Colors, int>> gameLineDicts)
    {
        foreach (var dict in gameLineDicts)
        {
            foreach (var keyValuePair in dict)
            {
                if (keyValuePair.Value > BagConfig[keyValuePair.Key])
                {
                    return false;
                }
            }
        }
        return true;
    }
    
}