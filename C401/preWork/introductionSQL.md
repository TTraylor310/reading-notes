# Introduction to SQL

## Summary

  It continues to build on being more specific and general. Clicked when I figured it was just adding the refinement to the next level.

## Images List

I remembered to screenshot most of them, no way to see a master list or completed.

* [Example 2](./introSQL/ex2.png)
* [Example 3](./introSQL/ex3.png)
* [Example 4](./introSQL/ex4.png)
* [Example 5? Review1?](./introSQL/ex.rv1.png)
* [Example 6](./introSQL/ex6.png)
* [Example 13](./introSQL/ex13.png)
* [Example 15](./introSQL/ex15.png)
* [Example 16](./introSQL/ex16.png)
* [Example 17](./introSQL/ex17.png)
* [Example 18](./introSQL/ex18.png)

### Notes

```
{

SELECT DISTINCT column, another_column, …
FROM mytable
WHERE condition(s)
ORDER BY column ASC/DESC
LIMIT num_limit OFFSET num_offset


INNER JOIN newtable
   ON oldtable.id = newtable.id


INSERT INTO table
(id, blah, blah2)
VALUES (1, "yes", 55);


UPDATE mytable
SET column = value_or_expr, 
    other_column = another_value_or_expr, 
    …
WHERE condition;


DELETE FROM mytable
WHERE condition;


CREATE TABLE IF NOT EXISTS mytable (
    column DataType TableConstraint DEFAULT default_value,
    another_column DataType TableConstraint DEFAULT default_value,
    …
);


ALTER TABLE mytable
ADD column DataType OptionalTableConstraint 
    DEFAULT default_value;

}
```
