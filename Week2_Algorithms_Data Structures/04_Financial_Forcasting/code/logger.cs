using System;
using System.Collections.Generic;  

class Program
{
    static double ForecastValue(double initialAmount, double growthRate, int years)
    {
        if (years == 0)
            return initialAmount;

        return ForecastValue(initialAmount, growthRate, years - 1) * (1 + growthRate);
    }

    static double ForecastValueMemo(double initialAmount, double growthRate, int years)
    {
        var memo = new Dictionary<int, double>();
        return ForecastValueMemoHelper(initialAmount, growthRate, years, memo);
    }

    static double ForecastValueMemoHelper(double initialAmount, double growthRate, int years, Dictionary<int, double> memo)
    {
        if (years == 0)
            return initialAmount;

        if (memo.ContainsKey(years))
            return memo[years];

        double result = ForecastValueMemoHelper(initialAmount, growthRate, years - 1, memo) * (1 + growthRate);
        memo[years] = result;
        return result;
    }

    static void Main()
    {
        try
        {
            Console.WriteLine("Enter current investment amount:");
            double currentAmount = Convert.ToDouble(Console.ReadLine());

            Console.WriteLine("Enter annual growth rate (e.g., 0.05 for 5%):");
            double rate = Convert.ToDouble(Console.ReadLine());

            Console.WriteLine("Enter number of years:");
            int years = Convert.ToInt32(Console.ReadLine());

            double future1 = ForecastValue(currentAmount, rate, years);
            Console.WriteLine($"\n Future Value (Recursive): {future1:F2}");

            double future2 = ForecastValueMemo(currentAmount, rate, years);
            Console.WriteLine($"Future Value (Memoized): {future2:F2}");
        }
        catch (Exception ex)
        {
            Console.WriteLine($" Error: {ex.Message}");
        }
    }
}
