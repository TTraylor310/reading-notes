# Notes for Class 04

## [Reading - NOSQL vs SQL](https://www.thegeekstuff.com/2014/01/sql-vs-nosql-db/?utm_source=tuicool)

1. What type of database is the best fit for the complex query intensive environment?
    * SQL is able to handle the complex query system better
2. What type of database is the best fit for hierarchical data storage?
    * NoSQL better for hierarchical data
3. Describe the differences in scalability between a SQl and NoSQL database as though you were speaking to a non-technical friend.
    * SQL can scale vertically and NoSQL can scale horizontally

## [Reading - SQL Modeling Techniques](https://www.essentialsql.com/get-ready-to-learn-sql-7-simplified-data-modeling/)

1. Among data tables, what is a one-to-many relationship and how do we “relate” them?
    * entry in database can be related to more than one entry in another database(s)
2. Prior to designing your relational database, it might be useful to ___ a ___ of the database tables and their relationships.
    * create a diagram
3. Explain the difference between a primary and foreign key.
    * primary keys uniquely identify each row
    * foreign keys are column or set of columns which match primary key in another table

## [Videos - NOSQL vs SQL](https://www.youtube.com/watch?v=ZS_kXvOeQ5Y)

1. How do we treat keywords and parameters differently in SQL syntax?
    * CAPITAL LETTERS denote SQL syntax
2. Define normalization within the context of schemas and data.
    * process to eliminate data redundancy and enhance data integrity in the table
3. Explain the difference between one-to-one, one-to-many, and many-to-many relationships to a non-technical recruiter.
    * one-to-one - ONE record of first table linked to zero or 1 record
    * one-to-many - ONE record of 1 table linked to zero or more rows in another table
    * many-to-many - relate EACH row of 1 table to many rows in another table and vice versa.

### Bookmark and Review

* [Sequelize API](https://sequelize.org/master/)
