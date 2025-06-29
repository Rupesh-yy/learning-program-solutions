CREATE TABLE Products (
    ProductID SERIAL PRIMARY KEY,
    ProductName VARCHAR(100),
    Category VARCHAR(50),
    Price DECIMAL(10, 2)
);

INSERT INTO Products (ProductName, Category, Price) VALUES
('Laptop', 'Electronics', 1200),
('Monitor', 'Electronics', 1200),
('Camera', 'Electronics', 900),
('Tablet', 'Electronics', 800),
('Phone', 'Electronics', 800),
('Blender', 'Kitchen', 150),
('Mixer', 'Kitchen', 150),
('Oven', 'Kitchen', 300),
('Kettle', 'Kitchen', 200),
('Toaster', 'Kitchen', 100);


SELECT
    ProductID,
    ProductName,
    Category,
    Price,
    ROW_NUMBER() OVER (PARTITION BY Category ORDER BY Price DESC) AS RowNum,
    RANK()       OVER (PARTITION BY Category ORDER BY Price DESC) AS RankNum,
    DENSE_RANK() OVER (PARTITION BY Category ORDER BY Price DESC) AS DenseRankNum
FROM Products;



WITH RankedProducts AS (
    SELECT *,
        ROW_NUMBER() OVER (PARTITION BY Category ORDER BY Price DESC) AS RowNum,
        RANK()       OVER (PARTITION BY Category ORDER BY Price DESC) AS RankNum,
        DENSE_RANK() OVER (PARTITION BY Category ORDER BY Price DESC) AS DenseRankNum
    FROM Products
)
SELECT *
FROM RankedProducts
WHERE RowNum <= 3 OR RankNum <= 3 OR DenseRankNum <= 3
ORDER BY Category, Price DESC;


