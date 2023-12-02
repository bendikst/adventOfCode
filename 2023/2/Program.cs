namespace _2;

class Program
{
    public static void Main()
    {
        TaskOne taskOne = new TaskOne();
        TaskTwo taskTwo = new TaskTwo();
//        int sumPossibleGames = 0;
        int powerOfCubes = 0;
        try
        {
            using var sr = new StreamReader("/Users/bendikstandal/src/adventofcode/2023/2/input.txt");
//            var gameNum = 1;
            do
            {
                var line = sr.ReadLine();
                var game = ReadLineIntoDict(line!);
               
//                if (taskOne.IsGamePossible(game))
//                {
//                    sumPossibleGames += gameNum;
//                }
//                gameNum += 1;
                var cubes = taskTwo.MinimumNumberOfCubes(game);
                powerOfCubes += cubes[0]*cubes[1]*cubes[2];
            }while(!sr.EndOfStream);
        }
        catch (IOException e)
        {
            Console.WriteLine("Error reading file");
            Console.WriteLine(e.Message);
        }
        
//        Console.WriteLine(sumPossibleGames);
        Console.WriteLine(powerOfCubes);
    }
    
    public static List<Dictionary<Colors, int>> ReadLineIntoDict(string line)
    {
        var res = new List<Dictionary<Colors, int>>();
        foreach(var reveal in line.Split([':', ';'])[1..])
        {
            var revRes = new Dictionary<Colors, int>();
            foreach(var c in reveal.Split(','))
            {
                var elem = c.Trim().Split(' ');
                revRes.Add(ToColors(elem[1].Trim()), int.Parse(elem[0]));
                
            }
            res.Add(revRes);
        }
        return res;
    }
    
    public static Colors ToColors(string input)
    {
        switch(input)
        {
            case "red": return Colors.Red;
            case "green": return Colors.Green;
            case "blue": return Colors.Blue;
            default: throw new Exception("Unable to translate to colors");
        }
    }
}