using System;

/// <summary>

/// </summary>
class Product
{
    public int ProductId { get; set; }
    public string ProductName { get; set; }
    public string Category { get; set; }

    public Product(int id, string name, string category)
    {
        ProductId = id;
        ProductName = name;
        Category = category;
    }

    public override string ToString()
    {
        return $"ID: {ProductId}, Name: {ProductName}, Category: {Category}";
    }
}

class Program
{
    /// <summary>
   
    /// </summary>
    static Product LinearSearch(Product[] products, string name)
    {
        foreach (var product in products)
        {
            if (product.ProductName.Equals(name, StringComparison.OrdinalIgnoreCase))
            {
                return product;
            }
        }
        return null;
    }

    /// <summary>
    
    /// </summary>
    static Product BinarySearch(Product[] products, string name)
    {
        int left = 0, right = products.Length - 1;

        while (left <= right)
        {
            int mid = (left + right) / 2;
            int result = string.Compare(products[mid].ProductName, name, StringComparison.OrdinalIgnoreCase);

            if (result == 0)
                return products[mid];
            else if (result < 0)
                left = mid + 1;
            else
                right = mid - 1;
        }
        return null;
    }

    static void Main()
    {
        
        Product[] products = new Product[]
        {
            new Product(1, "Laptop", "Electronics"),
            new Product(2, "Shoes", "Footwear"),
            new Product(3, "Smartphone", "Electronics"),
            new Product(4, "T-Shirt", "Clothing"),
            new Product(5, "Watch", "Accessories")
        };

        Console.WriteLine(" Enter product name to search:");
        string input = Console.ReadLine();

        
        var linearResult = LinearSearch(products, input);
        Console.WriteLine(linearResult != null
            ? " Found using Linear Search: " + linearResult
            : " Not found using Linear Search.");

        
        Array.Sort(products, (p1, p2) => p1.ProductName.CompareTo(p2.ProductName));
        var binaryResult = BinarySearch(products, input);
        Console.WriteLine(binaryResult != null
            ? " Found using Binary Search: " + binaryResult
            : " Not found using Binary Search.");
    }
}