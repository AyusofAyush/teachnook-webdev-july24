# Introduction to Databases

## Introduction

**1. Data**
   - **Definition:** Data refers to raw facts and figures that can be processed or analyzed to gain information. Data can be anything from numbers, text, images, or even multimedia.
   - **Example:** Consider a student management system where each student's information (name, age, grades) is stored. Here, each piece of information like "John Doe," "20 years old," and "A grade" is data.
   - **Types of Data:**
     - **Structured Data:** Organized in a clear, defined format, such as rows and columns in a table.
     - **Unstructured Data:** Data that does not follow a specific format, like emails, social media posts, or images.

**2. Database**
   - **Definition:** A database is an organized collection of data that can be easily accessed, managed, and updated. It serves as a storage system where data is stored in a structured way, typically to support processing and retrieval.
   - **Example:** In a library system, the database would store information about books, members, and borrowed items.
   - **Types of Databases:**
     - **Centralized Database:** Data is stored and maintained in a single location.
     - **Distributed Database:** Data is distributed across different physical locations but is accessible as a single logical database.
     - **Cloud Database:** Databases that are built, deployed, and accessed in a cloud environment.

**3. Relational Database**
   - **Definition:** A relational database stores data in tables with predefined relationships between them. The data in a relational database is organized into rows and columns, with each row representing a record and each column representing a field in that record.
   - **Example:** A school's relational database might have tables like `Students`, `Courses`, `Teachers`, and `Enrollments`. Relationships between these tables (e.g., which students are enrolled in which courses) are defined using keys.
   - **Key Concepts:**
     - **Primary Key:** A unique identifier for each record in a table.
     - **Foreign Key:** A field in one table that links to the primary key in another table, establishing a relationship between the two tables.
   - **Example:**
     - **Students Table:** Contains fields like `student_id` (Primary Key), `name`, and `age`.
     - **Courses Table:** Contains fields like `course_id` (Primary Key), `course_name`.
     - **Enrollments Table:** Links students to courses with fields like `student_id` (Foreign Key) and `course_id` (Foreign Key).

**4. Non-Relational Database**
   - **Definition:** Non-relational databases, often referred to as NoSQL databases, store data in formats other than tables. These databases are designed to handle large volumes of unstructured or semi-structured data.
   - **Example:** MongoDB, a document-based NoSQL database, stores data in JSON-like documents rather than rows and columns.
   - **Types of Non-Relational Databases:**
     - **Document Stores:** Store data in documents (e.g., MongoDB, CouchDB).
     - **Key-Value Stores:** Store data as key-value pairs (e.g., Redis, DynamoDB).
     - **Column-Family Stores:** Store data in columns instead of rows (e.g., Cassandra, HBase).
     - **Graph Databases:** Store data as nodes and edges, representing entities and their relationships (e.g., Neo4j).
   - **Example:**
     - **Document Store:** In MongoDB, a document for a student might look like this:
       ```json
       {
         "student_id": "123",
         "name": "John Doe",
         "age": 20,
         "courses": [
           {"course_id": "C101", "course_name": "Mathematics"},
           {"course_id": "C102", "course_name": "Physics"}
         ]
       }
       ```

**5. RDBMS (Relational Database Management System)**
   - **Definition:** An RDBMS is software that provides an interface to manage relational databases. It supports SQL (Structured Query Language) for querying and managing the database.
   - **Example:** Systems like MySQL, PostgreSQL, and Oracle Database are RDBMSs that allow users to perform CRUD operations (Create, Read, Update, Delete) on relational databases.
   - **Features:**
     - **Data Integrity:** Ensures that data is accurate and consistent.
     - **Backup and Recovery:** Provides mechanisms for data backup and recovery in case of failures.
     - **Concurrency Control:** Manages simultaneous operations by multiple users without conflicts.
   - **Example:**
     - In a banking system, an RDBMS ensures that a user's account balance is consistently updated across multiple transactions.

**6. ACID Properties** (related to relational Database)
   - **Definition:** ACID properties are a set of principles that ensure reliable processing of database transactions.
   - **Atomicity:** Ensures that a transaction is treated as a single unit, which either completes entirely or not at all.
     - **Example:** Transferring money between bank accounts – both the debit and credit must succeed or both must fail.
   - **Consistency:** Ensures that a transaction brings the database from one valid state to another, maintaining database rules.
     - **Example:** A transaction must ensure that the total amount of money in the system remains the same before and after the transaction.
   - **Isolation:** Ensures that transactions are executed in isolation, meaning that their intermediate states are not visible to other transactions.
     - **Example:** While two users are transferring money simultaneously, their transactions should not interfere with each other.
   - **Durability:** Ensures that once a transaction has been committed, it will remain so, even in the event of a system crash.
     - **Example:** Once money is transferred, the system crash should not affect the recorded transaction.

**7. NoSQL Databases**
   - **Definition:** NoSQL databases provide a flexible approach to data management by allowing the storage and retrieval of data in various formats beyond traditional tables.
   - **Example:** In an e-commerce application, a NoSQL database like MongoDB might be used to store product catalogs, user reviews, and shopping cart information, where each piece of data is stored as a document with flexible schema.
   - **Advantages:**
     - **Scalability:** Easily scales horizontally by adding more servers.
     - **Flexibility:** Allows for the storage of various types of data (structured, semi-structured, unstructured).
     - **Performance:** Optimized for specific use cases like handling large volumes of data or high-throughput read/write operations.
   - **Example:**
     - In a social media platform, a NoSQL database might store user profiles, posts, and comments, allowing for rapid retrieval of complex data structures.

**8. SQL vs NoSQL Databases**
   - **SQL Databases:**
     - **Structure:** Data is organized into tables with predefined schemas.
     - **Query Language:** Uses SQL for querying and managing the data.
     - **Transactions:** Strong ACID compliance, making it suitable for applications requiring consistency, like financial systems.
     - **Example:** A banking application using MySQL to manage accounts, transactions, and customer information.
   - **NoSQL Databases:**
     - **Structure:** Data is stored in various formats, such as documents, key-value pairs, or graphs.
     - **Query Language:** Each NoSQL database may have its own querying mechanism.
     - **Transactions:** Prioritizes availability and partition tolerance over strict consistency.
     - **Example:** An online gaming application using Redis to store player session data and leaderboards.

**9. Why We Need NoSQL Databases If We Have SQL Databases**
   - **Handling Large Volumes of Data:** NoSQL databases are designed to handle massive amounts of data across distributed systems, which may not be feasible with traditional SQL databases.
     - **Example:** A company like Facebook generates terabytes of data daily, requiring a NoSQL database like Cassandra to store and process this data efficiently.
   - **Flexible Data Models:** NoSQL databases can store unstructured or semi-structured data, which is common in modern applications like social media, IoT, and big data analytics.
     - **Example:** A blogging platform where each blog post might have different fields, requiring a flexible schema like that provided by MongoDB.
   - **Scalability:** NoSQL databases can easily scale horizontally by adding more servers to handle increasing loads, making them ideal for applications that experience rapid growth.
     - **Example:** An e-commerce site experiencing a surge in traffic during a sale might rely on a NoSQL database to maintain performance.
   - **Real-Time Data Processing:** NoSQL databases are optimized for high-throughput read and write operations, making them suitable for real-time applications.
     - **Example:** A real-time analytics platform that processes data from millions of devices in an IoT network.
   - **Availability Over Consistency:** In distributed systems, NoSQL databases often prioritize availability, ensuring that the system continues to function even if some nodes fail.
     - **Example:** A distributed system like Amazon DynamoDB, which ensures data availability even during network partitions.

**Example Comparison:**
   - **SQL Use Case:** A retail bank that needs to manage customer accounts, transactions, and financial records with strict consistency.
   - **NoSQL Use Case:** A content delivery network (CDN) that needs to serve millions of users simultaneously with minimal latency and high availability.


-----


## SQL Basics


### What is SQL Database?

An SQL database is a type of database that uses Structured Query Language (SQL) for defining, manipulating, and querying data. These databases are typically relational databases, meaning they organize data into tables that can be linked based on defined relationships. Here's a deeper dive into what an SQL database entails:

#### Key Characteristics of SQL Databases:

1. **Relational Model**:
   - **Tables**: Data is stored in tables (also called relations). Each table consists of rows (records) and columns (attributes or fields).
   - **Rows**: Each row represents a single record with a unique identifier known as the primary key.
   - **Columns**: Each column represents an attribute of the record, such as name, age, or address.

2. **SQL Language**:
   - SQL is used to perform various operations on the data stored in the database, including querying, updating, inserting, and deleting data.
   - SQL provides a standardized way to interact with the database, ensuring consistency and compatibility across different systems.

3. **Data Integrity**:
   - **Primary Keys**: Unique identifiers for each row in a table to ensure that each record can be uniquely identified.
   - **Foreign Keys**: References to primary keys in other tables, used to establish and enforce relationships between tables.
   - **Constraints**: Rules applied to table columns to ensure data integrity and accuracy, such as `NOT NULL`, `UNIQUE`, `CHECK`, and `FOREIGN KEY` constraints.

4. **ACID Properties**:
   - SQL databases adhere to ACID (Atomicity, Consistency, Isolation, Durability) properties, ensuring reliable transactions and data integrity.
   - **Atomicity**: Ensures that each transaction is treated as a single unit, which either completes in its entirety or not at all.
   - **Consistency**: Ensures that a transaction brings the database from one valid state to another, maintaining database rules.
   - **Isolation**: Ensures that concurrent transactions do not interfere with each other.
   - **Durability**: Ensures that once a transaction is committed, it remains so, even in the case of a system failure.

#### Common SQL Database Systems:

1. **MySQL**:
   - Widely used open-source relational database management system (RDBMS).
   - Popular for web applications and supported by many web hosting services.

2. **PostgreSQL**:
   - Open-source RDBMS known for its robustness, extensibility, and compliance with SQL standards.
   - Supports advanced data types and performance optimization features.

3. **Microsoft SQL Server**:
   - Proprietary RDBMS developed by Microsoft.
   - Known for its integration with Microsoft products and services, and enterprise-level features.

4. **Oracle Database**:
   - Highly robust and feature-rich RDBMS developed by Oracle Corporation.
   - Commonly used in large enterprises for complex applications requiring high performance and scalability.

5. **SQLite**:
   - Lightweight, file-based RDBMS that is embedded within applications.
   - Commonly used in mobile applications and small projects.

Example Usage:

Imagine a simple database for a school's student management system. It might have tables such as `Students`, `Courses`, and `Enrollments`:

- **Students Table**:
  ```sql
  CREATE TABLE Students (
      StudentID INT PRIMARY KEY,
      FirstName VARCHAR(50),
      LastName VARCHAR(50),
      DateOfBirth DATE
  );
  ```

- **Courses Table**:
  ```sql
  CREATE TABLE Courses (
      CourseID INT PRIMARY KEY,
      CourseName VARCHAR(100),
      Credits INT
  );
  ```

- **Enrollments Table**:
  ```sql
  CREATE TABLE Enrollments (
      EnrollmentID INT PRIMARY KEY,
      StudentID INT,
      CourseID INT,
      EnrollmentDate DATE,
      FOREIGN KEY (StudentID) REFERENCES Students(StudentID),
      FOREIGN KEY (CourseID) REFERENCES Courses(CourseID)
  );
  ```
Query Examples:

- **Insert a new student**:
  ```sql
  INSERT INTO Students (StudentID, FirstName, LastName, DateOfBirth)
  VALUES (1, 'John', 'Doe', '2000-01-01');
  ```

- **Retrieve all courses**:
  ```sql
  SELECT * FROM Courses;
  ```

- **Enroll a student in a course**:
  ```sql
  INSERT INTO Enrollments (EnrollmentID, StudentID, CourseID, EnrollmentDate)
  VALUES (1, 1, 101, '2023-09-01');
  ```

- **Find all students enrolled in a specific course**:
  ```sql
  SELECT Students.FirstName, Students.LastName
  FROM Students
  JOIN Enrollments ON Students.StudentID = Enrollments.StudentID
  WHERE Enrollments.CourseID = 101;
  ```

#### Benefits of SQL Databases:

- **Data Integrity**: Ensures accurate and reliable data through constraints and relationships.
- **Flexibility**: Supports complex queries and data manipulation operations.
- **Scalability**: Can handle large volumes of data and concurrent users.
- **Standardization**: Follows standardized SQL syntax, making it easier to learn and use across different systems.

SQL databases are foundational in many applications, providing a robust and efficient way to store, retrieve, and manage structured data.



### What is NoSQL Database ?
NoSQL databases are a category of database management systems designed to handle a wide variety of data models, including document, graph, key-value, and columnar formats. They are particularly suited for managing large volumes of unstructured, semi-structured, or structured data, offering flexibility, scalability, and performance advantages over traditional relational databases in certain use cases.

#### Key Characteristics of NoSQL Databases:

1. **Schema-less**:
   - Unlike relational databases, NoSQL databases do not require a predefined schema. This allows for more flexibility in storing different types of data and adapting to changes in data structure without downtime or schema migration.

2. **Horizontal Scalability**:
   - NoSQL databases are designed to scale out by distributing data across multiple servers. This horizontal scaling allows them to handle large volumes of data and high traffic loads efficiently.

3. **Variety of Data Models**:
   - **Document Store**: Stores data in JSON, BSON, or XML format. Each document is a self-contained unit, making it easy to store complex nested data structures.
     - Example: MongoDB
   - **Key-Value Store**: Data is stored as a collection of key-value pairs, where the key is a unique identifier, and the value is the data.
     - Example: Redis
   - **Column Store**: Stores data in columns rather than rows, making it efficient for read-heavy operations and analytical queries.
     - Example: Apache Cassandra
   - **Graph Database**: Stores data in nodes and edges, making it ideal for applications with complex relationships and interconnected data.
     - Example: Neo4j

4. **High Availability and Fault Tolerance**:
   - Many NoSQL databases are designed with built-in replication and distribution mechanisms, ensuring data availability and reliability even in the event of hardware failures.

#### Common NoSQL Databases and Use Cases:

1. **MongoDB**:
   - **Type**: Document Store
   - **Use Cases**: Content management systems, real-time analytics, IoT applications
   - **Example**: Storing user profiles and activity logs for a social media application.

2. **Redis**:
   - **Type**: Key-Value Store
   - **Use Cases**: Caching, session management, real-time analytics
   - **Example**: Storing user session data to enable fast access and improve application performance.

3. **Apache Cassandra**:
   - **Type**: Column Store
   - **Use Cases**: High write and read throughput applications, time-series data, recommendation engines
   - **Example**: Managing sensor data from an IoT network with high write and read demands.

4. **Neo4j**:
   - **Type**: Graph Database
   - **Use Cases**: Social networks, fraud detection, recommendation systems
   - **Example**: Representing and querying relationships in a social network to find friends of friends or suggest new connections.

#### Advantages of NoSQL Databases:

1. **Flexibility**:
   - Ability to handle a wide variety of data types and structures without requiring a fixed schema.
   - Easy to adapt to changing data models and requirements.

2. **Scalability**:
   - Designed to scale out by adding more servers, making it easier to manage large volumes of data and high-traffic applications.

3. **Performance**:
   - Optimized for specific use cases and data access patterns, providing high performance for read and write operations.

4. **High Availability**:
   - Built-in replication and distribution features ensure data availability and reliability, even in the face of hardware failures.

#### Example Use Case:

Suppose you are building a real-time recommendation system for an e-commerce platform. A NoSQL database like MongoDB or Apache Cassandra would be suitable due to the following reasons:

- **Schema-less Flexibility**: Product data can have varying attributes (e.g., electronics, clothing, books), and a schema-less database allows you to store these variations without predefined schema constraints.
- **Horizontal Scalability**: As the number of users and products grows, you can easily scale out by adding more servers to handle increased load.
- **Performance**: NoSQL databases can handle high write and read throughput, making them ideal for real-time recommendation queries and user interactions.

```javascript
// Example: Storing a product document in MongoDB
{
  "_id": "12345",
  "name": "Wireless Mouse",
  "category": "Electronics",
  "price": 29.99,
  "attributes": {
    "brand": "TechBrand",
    "color": "Black",
    "wireless": true,
    "batteryLife": "12 months"
  },
  "reviews": [
    {
      "userId": "user1",
      "rating": 5,
      "comment": "Great mouse, very responsive!"
    },
    {
      "userId": "user2",
      "rating": 4,
      "comment": "Good value for the price."
    }
  ]
}
```

#### Conclusion:

NoSQL databases offer a powerful alternative to traditional relational databases, providing the flexibility, scalability, and performance needed for modern applications. They are particularly well-suited for handling large volumes of diverse data types, making them an essential tool for many developers and organizations.


### Difference Between SQL & NoSQL Databases

SQL and NoSQL databases are fundamentally different in terms of their design, data models, scalability, and use cases. Here's a detailed comparison of the two:

### SQL Databases:

**1. Data Model:**
   - **Structured Data**: SQL databases use a structured data model, typically organized into tables with rows and columns.
   - **Schema**: They require a predefined schema, meaning the structure of the data must be defined before data can be inserted. This schema enforces data integrity and relationships through constraints and data types.

**2. Scalability:**
   - **Vertical Scaling**: SQL databases are generally scaled vertically by increasing the resources (CPU, RAM, SSD) on a single server.
   - **Replication and Sharding**: While some SQL databases support sharding and replication, they are traditionally more challenging to scale out horizontally compared to NoSQL databases.

**3. Query Language:**
   - **SQL (Structured Query Language)**: SQL databases use SQL for defining, querying, and manipulating data. SQL is a powerful and standardized language used for complex queries and transactions.
   - **ACID Compliance**: SQL databases ensure ACID (Atomicity, Consistency, Isolation, Durability) properties, making them suitable for applications requiring reliable transactions and data integrity.

**4. Examples:**
   - MySQL, PostgreSQL, Microsoft SQL Server, Oracle Database

**5. Use Cases:**
   - **Relational Data**: Applications that require structured data with complex relationships, such as ERP systems, financial applications, and traditional business applications.
   - **Transactions**: Systems that require multi-step transactions and strong data consistency, such as banking systems and e-commerce platforms.

### NoSQL Databases:

**1. Data Model:**
   - **Flexible Data Model**: NoSQL databases support various data models, including document, key-value, column-family, and graph models. They can store unstructured, semi-structured, and structured data.
   - **Schema-less**: NoSQL databases do not require a predefined schema. This allows for more flexibility in handling different data types and structures, and adapting to changes without schema migration.

**2. Scalability:**
   - **Horizontal Scaling**: NoSQL databases are designed to scale out by distributing data across multiple servers. This makes it easier to handle large volumes of data and high traffic loads.
   - **Built-in Distribution**: Many NoSQL databases have built-in mechanisms for data distribution, replication, and sharding, facilitating horizontal scaling.

**3. Query Language:**
   - **Varied Query Languages**: NoSQL databases often have their own query languages or APIs. For example, MongoDB uses a JSON-like query language, while Cassandra uses CQL (Cassandra Query Language).
   - **Eventual Consistency**: Many NoSQL databases follow eventual consistency models, which may not guarantee immediate consistency across all nodes, but provide higher availability and partition tolerance.

**4. Examples:**
   - MongoDB (Document), Redis (Key-Value), Cassandra (Column-Family), Neo4j (Graph)

**5. Use Cases:**
   - **Big Data**: Applications that need to handle large volumes of unstructured or semi-structured data, such as social media platforms, real-time analytics, and IoT applications.
   - **Scalability and Flexibility**: Systems that require high scalability and flexibility in data models, such as content management systems, recommendation engines, and distributed data storage.

### Summary Table:

| Feature               | SQL Databases                                        | NoSQL Databases                                   |
|-----------------------|------------------------------------------------------|--------------------------------------------------|
| **Data Model**        | Structured, table-based                              | Flexible, various models (document, key-value, etc.) |
| **Schema**            | Predefined schema required                           | Schema-less, flexible                             |
| **Scalability**       | Vertical (scale-up)                                  | Horizontal (scale-out)                            |
| **Query Language**    | SQL (Structured Query Language)                      | Varied query languages and APIs                   |
| **Consistency**       | Strong ACID compliance                               | Eventual consistency (in many NoSQL databases)    |
| **Examples**          | MySQL, PostgreSQL, SQL Server, Oracle                | MongoDB, Redis, Cassandra, Neo4j                  |
| **Typical Use Cases** | Transactional applications, relational data          | Big data, real-time analytics, flexible data storage |

### Choosing Between SQL and NoSQL:

- **Choose SQL if**: 
  - You need ACID compliance and strong consistency.
  - Your data is highly structured with complex relationships.
  - You require complex queries and transactions.

- **Choose NoSQL if**: 
  - You need to handle large volumes of unstructured or semi-structured data.
  - You require high scalability and can tolerate eventual consistency.
  - Your application demands flexibility in data models and rapid schema evolution.

Each type of database has its strengths and is suited to different kinds of applications. The choice between SQL and NoSQL depends on the specific requirements of your project, including the nature of the data, scalability needs, and consistency requirements.

-------------




## Basics

SQL (Structured Query Language) is a standardized programming language used for managing and manipulating relational databases. It is particularly well-suited for handling structured data, where relationships between data entities are defined. Here's a basic overview to help you understand SQL:

### Key Concepts of SQL:

1. **Relational Databases**:
   - A relational database stores data in tables, which are collections of rows and columns. Each row represents a record, and each column represents an attribute of the record.
   - Tables can be linked using keys (primary keys and foreign keys), which help maintain the relationships between different tables.

2. **SQL Statements**:
   - **Data Definition Language (DDL)**: Used to define and manage database schema. Examples include:
     - `CREATE TABLE`: Creates a new table.
     - `ALTER TABLE`: Modifies an existing table.
     - `DROP TABLE`: Deletes a table.

   - **Data Manipulation Language (DML)**: Used for managing data within tables. Examples include:
     - `SELECT`: Retrieves data from one or more tables.
     - `INSERT`: Adds new records to a table.
     - `UPDATE`: Modifies existing records.
     - `DELETE`: Removes records from a table.

   - **Data Control Language (DCL)**: Used for managing access to data. Examples include:
     - `GRANT`: Gives a user access privileges to the database.
     - `REVOKE`: Removes access privileges.

   - **Transaction Control Language (TCL)**: Manages changes made by DML statements. Examples include:
     - `COMMIT`: Saves all changes made during the current transaction.
     - `ROLLBACK`: Undoes all changes made during the current transaction.
     - `SAVEPOINT`: Sets a point within a transaction to which you can later roll back.

### Basic SQL Queries:

1. **Selecting Data**:
   ```sql
   SELECT column1, column2
   FROM table_name
   WHERE condition;
   ```

2. **Inserting Data**:
   ```sql
   INSERT INTO table_name (column1, column2)
   VALUES (value1, value2);
   ```

3. **Updating Data**:
   ```sql
   UPDATE table_name
   SET column1 = value1, column2 = value2
   WHERE condition;
   ```

4. **Deleting Data**:
   ```sql
   DELETE FROM table_name
   WHERE condition;
   ```

### Example Use Case:

Suppose you have a database for a library. It includes a table `Books` with columns `BookID`, `Title`, `Author`, and `YearPublished`.

- To list all books:
  ```sql
  SELECT * FROM Books;
  ```

- To add a new book:
  ```sql
  INSERT INTO Books (BookID, Title, Author, YearPublished)
  VALUES (1, '1984', 'George Orwell', 1949);
  ```

- To update a book's information:
  ```sql
  UPDATE Books
  SET YearPublished = 1950
  WHERE Title = '1984';
  ```

- To delete a book from the table:
  ```sql
  DELETE FROM Books
  WHERE BookID = 1;
  ```

### Benefits of Using SQL:

- **Efficiency**: Allows for complex queries and data manipulation with minimal code.
- **Flexibility**: Can handle a variety of data types and relationships.
- **Scalability**: Suitable for small to very large databases.
- **Standardization**: Provides a consistent and widely understood syntax across different database systems.

Understanding SQL is fundamental for anyone working with databases, as it provides the tools needed to interact with and manage the data effectively.


## What can SQL do ?
```
SQL can execute queries against a database
SQL can retrieve data from a database
SQL can insert records in a database
SQL can update records in a database
SQL can delete records from a database
SQL can create new databases
SQL can create new tables in a database
SQL can create stored procedures in a database
SQL can create views in a database
SQL can set permissions on tables, procedures, and views
```

## Some Most Important SQL Commands
```
SELECT - extracts data from a database
UPDATE - updates data in a database
DELETE - deletes data from a database
INSERT INTO - inserts new data into a database
CREATE DATABASE - creates a new database
ALTER DATABASE - modifies a database
CREATE TABLE - creates a new table
ALTER TABLE - modifies a table
DROP TABLE - deletes a table
CREATE INDEX - creates an index (search key)
DROP INDEX - deletes an index
```

## SQL Tutorial

- Select
```sql
SELECT * FROM Customers;
```

- Distinct
```sql
SELECT DISTINCT Country FROM Customers;
```

- Where
```sql
SELECT * FROM Customers
WHERE Country='Mexico';
```
- Order by
```sql
SELECT * FROM Customers
ORDER BY Country ASC, CustomerName DESC;
```
- And
```sql
SELECT *
FROM Customers
WHERE Country = 'Spain' AND CustomerName LIKE 'G%';
```
- Or
```sql
SELECT *
FROM Customers
WHERE Country = 'Germany' OR Country = 'Spain';
```
- Not
```sql
SELECT * FROM Customers
WHERE NOT Country = 'Spain';

SELECT * FROM Customers
WHERE CustomerName NOT LIKE 'A%';

SELECT * FROM Customers
WHERE CustomerID NOT BETWEEN 10 AND 60;

SELECT * FROM Customers
WHERE City NOT IN ('Paris', 'London');

SELECT * FROM Customers
WHERE NOT CustomerID > 50;
```
- Insert
```sql
INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country)
VALUES ('Cardinal', 'Tom B. Erichsen', 'Skagen 21', 'Stavanger', '4006', 'Norway');
```
- NULL
```sql
SELECT CustomerName, ContactName, Address
FROM Customers
WHERE Address IS NULL; // = or <> it means equal

SELECT CustomerName, ContactName, Address
FROM Customers
WHERE Address IS NOT NULL;
```
- Update
```sql
UPDATE Customers
SET ContactName = 'Alfred Schmidt', City= 'Frankfurt'
WHERE CustomerID = 1;
```
- Delete
```sql
DELETE FROM Customers WHERE CustomerName='Alfreds Futterkiste';

DELETE FROM Customers; // delete all records

DROP TABLE Customers; // drop table
```
- Select Top
```sql
MySQL Syntax:

SELECT column_name(s)
FROM table_name
WHERE condition
LIMIT number;
```
- SQL Aggregate Functions
```sql
MIN() - returns the smallest value within the selected column
MAX() - returns the largest value within the selected column
COUNT() - returns the number of rows in a set
SUM() - returns the total sum of a numerical column
AVG() - returns the average value of a numerical column
```

- SQL Like
```sql
LIKE operator is used in a WHERE clause to search for a specified pattern in a column.

There are two wildcards often used in conjunction with the LIKE operator:

 The percent sign % represents zero, one, or multiple characters
 The underscore sign _ represents one, single character

SELECT * FROM Customers
WHERE CustomerName LIKE 'a%';

SELECT * FROM Customers
WHERE city LIKE 'L_nd__';

SELECT * FROM Customers
WHERE city LIKE '%L%';

SELECT * FROM Customers
WHERE CustomerName LIKE 'La%';

SELECT * FROM Customers
WHERE CustomerName LIKE 'a%' OR CustomerName LIKE 'b%';

SELECT * FROM Customers
WHERE CustomerName LIKE '%a';

SELECT * FROM Customers
WHERE CustomerName LIKE '%or%';

SELECT * FROM Customers
WHERE Country LIKE 'Spain';
```
- Wildcard Characters
```sql
%	Represents zero or more characters
_	Represents a single character
[]	Represents any single character within the brackets *
^	Represents any character not in the brackets *
-	Represents any single character within the specified range *
{}	Represents any escaped character ** 

// ** Supported only in Oracle databases.
// * Not supported in PostgreSQL and MySQL databases.


SELECT * FROM Customers
WHERE CustomerName LIKE '[bsp]%';

SELECT * FROM Customers
WHERE CustomerName LIKE '[a-f]%';
```
- IN
```sql
SELECT * FROM Customers
WHERE Country IN ('Germany', 'France', 'UK');

SELECT * FROM Customers
WHERE Country NOT IN ('Germany', 'France', 'UK');
```

- Between
```sql
SELECT * FROM Products
WHERE Price BETWEEN 10 AND 20;
```

- Alias
```sql
SELECT CustomerID AS ID, CustomerName AS Customer
FROM Customers;

SELECT ProductName AS [My Great Products]
FROM Products; // for space characters

SELECT ProductName AS "My Great Products"
FROM Products;

// table alias
SELECT o.OrderID, o.OrderDate, c.CustomerName
FROM Customers AS c, Orders AS o
WHERE c.CustomerName='Around the Horn' AND c.CustomerID=o.CustomerID;

// MSQL Example:
SELECT CustomerName, CONCAT(Address,', ',PostalCode,', ',City,', ',Country) AS Address
FROM Customers;
```
- JOIN
```sql
SELECT Orders.OrderID, Customers.CustomerName, Orders.OrderDate
FROM Orders
INNER JOIN Customers ON Orders.CustomerID=Customers.CustomerID;
```
- Left Join
```sql
SELECT Orders.OrderID, Customers.CustomerName, Orders.OrderDate
FROM Orders
LEFT JOIN Customers ON Orders.CustomerID=Customers.CustomerID;
```
- Right Join
```sql
SELECT Orders.OrderID, Employees.LastName, Employees.FirstName
FROM Orders
RIGHT JOIN Employees ON Orders.EmployeeID = Employees.EmployeeID
ORDER BY Orders.OrderID;
```
- Full Outer Join
```sql
SELECT Customers.CustomerName, Orders.OrderID
FROM Customers
FULL OUTER JOIN Orders ON Customers.CustomerID=Orders.CustomerID
ORDER BY Customers.CustomerName;
```
- Union
```sql
SELECT City FROM Customers
UNION
SELECT City FROM Suppliers
ORDER BY City;

SELECT City FROM Customers
UNION ALL
SELECT City FROM Suppliers
ORDER BY City;

SELECT City, Country FROM Customers
WHERE Country='Germany'
UNION
SELECT City, Country FROM Suppliers
WHERE Country='Germany'
ORDER BY City;
```
- Group By
```sql
SELECT COUNT(CustomerID), Country
FROM Customers
GROUP BY Country;
```
- Having
```sql
SELECT COUNT(CustomerID), Country
FROM Customers
GROUP BY Country
HAVING COUNT(CustomerID) > 5;

SELECT COUNT(CustomerID), Country
FROM Customers
GROUP BY Country
HAVING COUNT(CustomerID) > 5
ORDER BY COUNT(CustomerID) DESC;
```
- Exists
```sql
SELECT SupplierName
FROM Suppliers
WHERE EXISTS (SELECT ProductName FROM Products WHERE Products.SupplierID = Suppliers.supplierID AND Price < 20);
```
- Any
```sql
SELECT ProductName
FROM Products
WHERE ProductID = ANY
  (SELECT ProductID
  FROM OrderDetails
  WHERE Quantity > 99);
```
- All
```sql
SELECT ProductName
FROM Products
WHERE ProductID = ALL
  (SELECT ProductID
  FROM OrderDetails
  WHERE Quantity = 10);
```
- SQL Case
```sql
SELECT OrderID, Quantity,
CASE
    WHEN Quantity > 30 THEN 'The quantity is greater than 30'
    WHEN Quantity = 30 THEN 'The quantity is 30'
    ELSE 'The quantity is under 30'
END AS QuantityText
FROM OrderDetails;
```
- SQL Comments
```sql
-- SELECT * FROM Customers;
SELECT * FROM Products;

SELECT * FROM Customers -- WHERE City='Berlin';
```

----

## Setting up a database Server

To set up a database server in Express using MongoDB, follow these steps:

### Step 1: Install Node.js and MongoDB

- **Node.js:** Make sure Node.js is installed on your system. You can download it from [Node.js official website](https://nodejs.org/).
- **MongoDB:** Install MongoDB on your system. You can download it from [MongoDB official website](https://www.mongodb.com/try/download/community).

### Step 2: Initialize a New Node.js Project

1. **Create a new directory for your project:**
   ```bash
   mkdir express-mongodb-setup
   cd express-mongodb-setup
   ```

2. **Initialize a new Node.js project:**
   ```bash
   npm init -y
   ```

   This will create a `package.json` file.

### Step 3: Install Required Dependencies

Install Express, Mongoose (for interacting with MongoDB), and `nodemon` (for auto-restarting the server during development):

```bash
npm install express mongoose
npm install --save-dev nodemon
```

### Step 4: Create the Express Server

1. **Create a file named `server.js` in the root of your project:**

```javascript
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// MongoDB connection URL
const mongoURI = 'mongodb://localhost:27017/mydatabase';

// Connect to MongoDB
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.error('MongoDB connection error:', err));

// Define a simple schema and model
const ItemSchema = new mongoose.Schema({
    name: String,
    quantity: Number
});

const Item = mongoose.model('Item', ItemSchema);

// Basic CRUD routes

// Create a new item
app.post('/items', async (req, res) => {
    const newItem = new Item(req.body);
    try {
        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Read all items
app.get('/items', async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Read a single item by ID
app.get('/items/:id', async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);
        if (!item) return res.status(404).json({ error: 'Item not found' });
        res.json(item);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update an item by ID
app.put('/items/:id', async (req, res) => {
    try {
        const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedItem) return res.status(404).json({ error: 'Item not found' });
        res.json(updatedItem);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Delete an item by ID
app.delete('/items/:id', async (req, res) => {
    try {
        const deletedItem = await Item.findByIdAndDelete(req.params.id);
        if (!deletedItem) return res.status(404).json({ error: 'Item not found' });
        res.json({ message: 'Item deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
```

### Step 5: Run the Server

1. **Add a `start` script to `package.json` for easy running:**

```json
"scripts": {
    "start": "nodemon server.js"
}
```

2. **Run the server:**

```bash
npm start
```

You should see the message `MongoDB connected...` followed by `Server running on http://localhost:3000`.

### Step 6: Test the API

Use a tool like Postman or cURL to test the API endpoints:

- **Create an Item (POST):**
  - URL: `http://localhost:3000/items`
  - Body:
    ```json
    {
      "name": "Apples",
      "quantity": 10
    }
    ```
  
- **Get All Items (GET):**
  - URL: `http://localhost:3000/items`

- **Get a Single Item by ID (GET):**
  - URL: `http://localhost:3000/items/:id`

- **Update an Item (PUT):**
  - URL: `http://localhost:3000/items/:id`
  - Body:
    ```json
    {
      "name": "Oranges",
      "quantity": 5
    }
    ```

- **Delete an Item (DELETE):**
  - URL: `http://localhost:3000/items/:id`

This setup provides a basic Express server with MongoDB integration, allowing you to perform CRUD operations on a simple `Item` collection.

-----

## Simple Blog with SQLite

Here’s how you can create a simple blog application using SQLite, Express, and EJS as the templating engine.

### Step 1: Project Setup

1. **Create a new directory for your project:**

   ```bash
   mkdir express-sqlite-blog
   cd express-sqlite-blog
   ```

2. **Initialize a new Node.js project:**

   ```bash
   npm init -y
   ```

3. **Install required dependencies:**

   ```bash
   npm install express sqlite3 ejs
   ```

### Step 2: Create the Project Structure

Your project structure should look like this:

```
express-sqlite-blog/
│
├── views/
│   ├── layout.ejs
│   ├── index.ejs
│   ├── post.ejs
│   └── new-post.ejs
│
├── public/
│   └── styles.css
│
├── server.js
└── database.js
```

### Step 3: Create the SQLite Database

Create a `database.js` file to handle the database setup.

#### database.js

```javascript
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

db.serialize(() => {
    // Create posts table
    db.run(`
        CREATE TABLE posts (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            content TEXT NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `);

    // Create comments table
    db.run(`
        CREATE TABLE comments (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            post_id INTEGER,
            content TEXT NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY(post_id) REFERENCES posts(id)
        )
    `);
});

module.exports = db;
```

### Step 4: Create the Express Server

Create a `server.js` file to handle the server setup and routing.

#### server.js

```javascript
const express = require('express');
const db = require('./database');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Home route - list all posts
app.get('/', (req, res) => {
    db.all('SELECT * FROM posts ORDER BY created_at DESC', (err, posts) => {
        if (err) return res.status(500).send('Database error');
        res.render('index', { posts });
    });
});

// Route to show a specific post with comments
app.get('/post/:id', (req, res) => {
    const postId = req.params.id;
    db.get('SELECT * FROM posts WHERE id = ?', [postId], (err, post) => {
        if (err) return res.status(500).send('Database error');
        db.all('SELECT * FROM comments WHERE post_id = ? ORDER BY created_at DESC', [postId], (err, comments) => {
            if (err) return res.status(500).send('Database error');
            res.render('post', { post, comments });
        });
    });
});

// Route to add a new comment
app.post('/post/:id/comment', (req, res) => {
    const postId = req.params.id;
    const content = req.body.content;
    db.run('INSERT INTO comments (post_id, content) VALUES (?, ?)', [postId, content], err => {
        if (err) return res.status(500).send('Database error');
        res.redirect(`/post/${postId}`);
    });
});

// Route to show the form to create a new post
app.get('/new-post', (req, res) => {
    res.render('new-post');
});

// Route to create a new post
app.post('/new-post', (req, res) => {
    const { title, content } = req.body;
    db.run('INSERT INTO posts (title, content) VALUES (?, ?)', [title, content], err => {
        if (err) return res.status(500).send('Database error');
        res.redirect('/');
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
```

### Step 5: Create the Views

Create EJS templates for the different views.

#### views/layout.ejs

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Blog</title>
    <link rel="stylesheet" href="/styles.css">
</head>
<body>
    <header>
        <nav>
            <a href="/">Home</a>
            <a href="/new-post">New Post</a>
        </nav>
    </header>
    <main>
        <%- body %>
    </main>
    <footer>
        <p>&copy; <%= new Date().getFullYear() %> Simple Blog</p>
    </footer>
</body>
</html>
```

#### views/index.ejs

```html
<% layout('layout') %>

<h1>Simple Blog</h1>

<% if (posts.length === 0) { %>
    <p>No posts available.</p>
<% } else { %>
    <ul class="posts">
        <% posts.forEach(post => { %>
            <li>
                <h2><a href="/post/<%= post.id %>"><%= post.title %></a></h2>
                <p><%= post.content.substring(0, 200) %>...</p>
                <small>Posted on <%= new Date(post.created_at).toLocaleString() %></small>
            </li>
        <% }) %>
    </ul>
<% } %>
```

#### views/post.ejs

```html
<% layout('layout') %>

<h1><%= post.title %></h1>
<p><%= post.content %></p>
<small>Posted on <%= new Date(post.created_at).toLocaleString() %></small>

<h2>Comments</h2>
<% if (comments.length === 0) { %>
    <p>No comments yet.</p>
<% } else { %>
    <ul class="comments">
        <% comments.forEach(comment => { %>
            <li>
                <p><%= comment.content %></p>
                <small>Posted on <%= new Date(comment.created_at).toLocaleString() %></small>
            </li>
        <% }) %>
    </ul>
<% } %>

<h3>Add a Comment</h3>
<form action="/post/<%= post.id %>/comment" method="POST">
    <textarea name="content" required></textarea>
    <button type="submit">Submit</button>
</form>
```

#### views/new-post.ejs

```html
<% layout('layout') %>

<h1>Create a New Post</h1>
<form action="/new-post" method="POST">
    <div>
        <label for="title">Title</label>
        <input type="text" name="title" id="title" required>
    </div>
    <div>
        <label for="content">Content</label>
        <textarea name="content" id="content" required></textarea>
    </div>
    <button type="submit">Create Post</button>
</form>
```

### Step 6: Add Some Styles

Create a `public/styles.css` file for basic styling.

#### public/styles.css

```css
/* Reset some default browser styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    color: #333;
    line-height: 1.6;
    padding: 20px;
}

header {
    background-color: #333;
    color: #fff;
    padding: 10px 0;
    text-align: center;
    margin-bottom: 20px;
}

header nav a {
    color: #fff;
    margin: 0 15px;
    text-decoration: none;
}

header nav a:hover {
    text-decoration: underline;
}

h1 {
    margin-bottom: 20px;
    color: #333;
}

ul.posts, ul.comments {
    list-style: none;
    padding: 0;
}

ul.posts li, ul.comments li {
    background-color: #fff;
    padding: 20px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
}

ul.posts li h2 {
    margin-bottom: 10px;
    font-size: 1.5em;
}

ul.posts li p {
    margin-bottom: 10px;
    font-size: 1em;
}

ul.comments li p {
    margin-bottom: 10px;
    font-size: 1em;
}

textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
}

button {
    display: inline-block;
    padding: 10px 20px;
    color: #fff;
    background-color: #333;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #555;
}

footer {
    margin-top: 20px;
    text-align: center;
    padding: 10px

 0;
    background-color: #333;
    color: #fff;
    border-top: 1px solid #ddd;
}
```

### Step 7: Run the Application

To run your blog application:

1. Make sure you're in the project directory.
2. Start the server by running:

   ```bash
   node server.js
   ```

3. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to see the blog.

### Summary

- You have created a simple blog application using Express, SQLite, and EJS.
- The app allows users to create posts and add comments.
- The UI is styled to look modern and elegant with a responsive design.

This setup can be further extended and customized according to your needs.