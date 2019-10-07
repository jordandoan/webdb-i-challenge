# Database Queries

## Find all customers with postal code 1010  
```SQL 
SELECT * FROM Customers WHERE PostalCode = "1010";
```
## Find the phone number for the supplier with the id 11  
```SQL
SELECT Phone FROM Suppliers WHERE SupplierID = 11;
````
## List first 10 orders ever places, descending by the order date  
```SQL
SELECT TOP 10 * 
FROM Orders 
ORDER BY OrderDate desc
```

## Find all customers that live in London, Madrid, or Brazil  
```SQL
SELECT * FROM Customers WHERE Country = "London" OR "Madrid" OR "Brazil"
```

## Add a customer record for "The Shire", the contact name is "Bilbo Baggins" the address is -"1 Hobbit-Hole" in "Bag End", postal code "111" and the country is "Middle Earth"
```SQL
INSERT Into Customers (CustomerName, ContactName, Address, City, PostalCode, Country)
VALUES ("The Shire", "BilboBaggins", "1 Hobbit-Hole", "Bag End", "111", "Middle Earth")
```

## Update Bilbo Baggins record so that the postal code changes to "11122"
```SQL
UPDATE Customers 
SET PostalCode = "11222"
WHERE ContactName = "Bilbo Baggins"
```
## (Stretch) Find a query to discover how many different cities are stored in the Customers table. Repeats should not be double counted  
```SQL
SELECT DISTINCT City
FROM Customers
```

## (Stretch) Find all suppliers who have names longer than 20 characters. You can use `length(SupplierName)` to get the length of the name
```SQL
SELECT * 
FROM Suppliers
WHERE LEN(SupplierName) > 20
```

