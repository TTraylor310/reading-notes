# Notes for Class 8

## [API Design Best Practices](https://docs.microsoft.com/en-us/azure/architecture/best-practices/api-design)

1. What does REST stand for?
    * Representational State Transfer
2. REST APIs are designed around a ____.
    * resouces
3. What is an identifier of a resource? Give an example.
    * URI which uniquely identifies that resouce
4. What are the most common HTTP verbs?
    * GET, POST, PUT, PATCH, & DELETE
5. What should the URIs be based on?
    * uniquely identifiable
6. Give an example of a good URI.
    * "https://adventure-works.com/orders/1"
7. What does it mean to have a ‘chatty’ web API? Is this a good or a bad thing?
    * Sites which have a large number of small resources which leads to repeated calls
8. What status code does a successful GET request return?
    * 200 (OK) : normally
      * 204 (No Content) : no response body included in HTTP response
9. What status code does an unsuccessful GET request return?
    * 404 (Not Found) : if resource cannot be found
10. What status code does a successful POST request return?
    * 200 (Created) : normal
          * 204 (No Content) : no response body included in HTTP response
    * 400 (Bad Request) : clint puts invalid data
11. What status code does a successful DELETE request return?
    * 204 (No Content) : if delete operation *successful*
    * 404 (Not Found) : if resource doesn't exists, web server can return

### Bookmark and Review

* [RegExr](https://regexr.com/) - cheatsheet?
* [Regex Tutorial](https://medium.com/factory-mind/regex-tutorial-a-simple-cheatsheet-by-examples-649dc1c3f285)
* [Regex 101](https://regex101.com/)
