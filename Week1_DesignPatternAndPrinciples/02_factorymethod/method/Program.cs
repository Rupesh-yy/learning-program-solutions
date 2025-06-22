using System;

interface IDocument
{
    void Open();
}

class WordDocument : IDocument
{
    public void Open()
    {
        Console.WriteLine("Opening Word Document.");
    }
}

class PdfDocument : IDocument
{
    public void Open()
    {
        Console.WriteLine("Opening PDF Document.");
    }
}

class ExcelDocument : IDocument
{
    public void Open()
    {
        Console.WriteLine("Opening Excel Document.");
    }
}

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter the type of document to open (word/pdf/excel):");
        string input = Console.ReadLine()?.ToLower();

        IDocument document = input switch
        {
            "word" => new WordDocument(),
            "pdf" => new PdfDocument(),
            "excel" => new ExcelDocument(),
            _ => null
        };

        if (document != null)
        {
            document.Open();
        }
        else
        {
            Console.WriteLine("Invalid input. Please enter 'word', 'pdf', or 'excel'.");
        }
    }
}
