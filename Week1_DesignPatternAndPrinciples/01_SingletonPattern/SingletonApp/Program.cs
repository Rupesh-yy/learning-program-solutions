using System;

namespace SingletonApp
{
    
    public class Logger
    {
        
        private static Logger? _instance;

        
        private Logger()
        {
            Console.WriteLine("Logger instance created.");
        }

        
        public static Logger GetInstance()
        {
            _instance ??= new Logger();
            return _instance;
        }

        
        public void Log(string message)
        {
            Console.WriteLine($"[LOG]: {message}");
        }
    }

    
    class Program
    {
        static void Main(string[] args)
        {
            Logger logger1 = Logger.GetInstance();
            logger1.Log("First log message");

            Logger logger2 = Logger.GetInstance();
            logger2.Log("Second log message");

            
            Console.WriteLine($"Are both instances the same? {ReferenceEquals(logger1, logger2)}");
        }
    }
}