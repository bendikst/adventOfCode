    namespace _2;
public class TaskTwo {
    public readonly Dictionary<Colors, int> BagConfig = new()
    {
        {Colors.Red, 12},
        {Colors.Green, 13},
        {Colors.Blue, 14}
    };
    public List<int> MinimumNumberOfCubes(List<Dictionary<Colors, int>> gameLineDicts)
    {
        var res = new List<int>(){0, 0, 0}; // [r, g, b]
        foreach (var dict in gameLineDicts)
        {
            foreach (var keyValuePair in dict)
            {
                switch(keyValuePair.Key)
                {
                    case Colors.Red:
                        res[0] = int.Max(res[0], keyValuePair.Value);
                        break;
                    case Colors.Green:
                        res[1] = int.Max(res[1], keyValuePair.Value);
                        break;
                    case Colors.Blue:
                        res[2] = int.Max(res[2], keyValuePair.Value);
                        break;
                }
            }
        }
    return res;
    }
}