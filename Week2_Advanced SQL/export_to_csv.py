import sqlite3
import pandas as pd
import os

# Set directory
os.chdir(r"C:\Users\DELL\OneDrive\Documents\Cognizant\DN-4.0-Deep-Skilling\Week2_AdvancedSQLAndNunit\RankingAndWindowingFunction")

print("📂 Changed Directory To:", os.getcwd())

try:
    conn = sqlite3.connect("Product.db")
    print("🔗 Connected to Product.db")

    query = """
    SELECT *
    FROM (
        SELECT *,
               ROW_NUMBER() OVER (PARTITION BY Category ORDER BY Price DESC) AS row_num
        FROM Products
    ) AS ranked
    WHERE row_num <= 3;
    """
    
    df = pd.read_sql_query(query, conn)
    print("📥 Retrieved top 3 most expensive products per category")

    df.to_csv("Top3ProductsPerCategory.csv", index=False)
    print("✅ Exported to Top3ProductsPerCategory.csv")

except Exception as e:
    print("❌ Error:", e)

finally:
    conn.close()
    print("🔒 Connection closed.")
