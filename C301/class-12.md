# Notes for Class 12

## [Status Codes Based on REST Methods](https://www.moesif.com/blog/technical/api-design/Which-HTTP-Status-Code-To-Use-For-Every-CRUD-App/)

1. In your own words, describe what each group of status code represents:
    * 100’s = Info Codes: usually giving information before sending body
    * 200’s = Success Codes: good communication with server
    * 300’s = Redirection Codes: tells client thing isn't avialable at the expected location anymore
    * 400’s = Client Error Codes: numerous reasons why, but all are invalid requests to server
    * 500’s = Server Error Codes: problems with the server, overloaded, unreachable server
2. What is a status code 202?
    * Asynchronous processing of request - met all validation requirements
3. What is a status code 308?
    * Permanent redirect - resouce available at new URL
4. What code would you use if an update didn’t return data to a client?
    * 204 No Content
5. What code would you use if a resource used to exist but no longer does?
    * 410 - Gone
6. What is the ‘Forbidden’ status code?
    * 403 - no permissions to access the resource

## [Build a REST API with Node.js, Express, & MongoDB - Quick](https://www.youtube.com/channel/UCFbNIlppjAuEX4znoulh0Cw)

1. Why do we need to pull our MongoDB database string out of our server and put it into our .env?
    * on deploy we to NOT use localhost
2. What is middleware?
    * code that run when server gets request but before it gets past to routes
3. What does app.use(express.json()) do?
    * lets server accept json
4. What does the /:id mean in a route?
    * : means parameter and can request that info after slash /
5. What is the difference between PUT and PATCH?
    * PATCH only update what user passes
6. How do you make a default value in a schema?
    * default: Date.now()
7. What does a 500 error status code mean?
    * error on server, server side, not client
8. What is the difference between a status 200 and a status 201?
    * 201 is more specific that it created something in particular
