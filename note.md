Database is the data that been saved persistently and also been organized for easy retrieval and manipulated.

### The persisted data is the data that get access frequently and not likely modified in other words we can trust the data to be the same unless we changed of deleted explicitly.

we can save data in the object of js but it wouldnt be persisted

**_SQL_**
Sql is the heart of the relational database
stands for Structured Query Language

So how can talk to the database?
sql
using wrapper called knex that allows us to wright a sql command in js

there are 5 commands on sql we need to know so we can interacted with
database
1.ddl: Data definition language : create , alter and drop table
2.dql: Data query language : select
3.dml: data manipulation language: update insert and delete data

insert into tableName (count , city , name , address)
value ("usa" , "ca" , "Yasir" , "wherever" )

update tableName set columnName = newValue where idOfRaw = number of something


to read and retrieve the data 
select columnName or * as whole form tableName


to get a specific raw using id column of whatever 

select columnName from tableName
where the rawID or rawName = "something"
