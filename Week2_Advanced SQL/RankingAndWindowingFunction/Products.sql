
CREATE TABLE IF NOT EXISTS Products (
    ProductID INTEGER PRIMARY KEY,
    ProductName TEXT,
    Category TEXT,
    Price REAL
);

DELETE FROM Products;

INSERT INTO Products (ProductName, Category, Price) VALUES
('Laptop', 'Electronics', 900),
('Smartphone', 'Electronics', 700),
('Headphones', 'Electronics', 200),
('TV', 'Electronics', 1200),
('Microwave', 'Home Appliances', 400),
('Blender', 'Home Appliances', 150),
('Refrigerator', 'Home Appliances', 1000),
('Oven', 'Home Appliances', 800),
('Shampoo', 'Personal Care', 100),
('Perfume', 'Personal Care', 300),
('Cream', 'Personal Care', 250),
('Lotion', 'Personal Care', 150);

WITH RankedProducts AS (
    SELECT 
        ProductName,
        Category,
        Price,
        ROW_NUMBER() OVER (PARTITION BY Category ORDER BY Price DESC) AS RowNum,
        RANK() OVER (PARTITION BY Category ORDER BY Price DESC) AS RankVal,
        DENSE_RANK() OVER (PARTITION BY Category ORDER BY Price DESC) AS DenseRankVal
    FROM Products
)
SELECT *
FROM RankedProducts
WHERE RowNum <= 3;
