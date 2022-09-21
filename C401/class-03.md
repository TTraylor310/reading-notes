# Notes for Class 03

## [Review: ES6 Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

1. Classes are a template for creating ____.
    * Objects
2. Can a class declaration be hoisted?
    * a function can call it earlier yes. but the class has to be defined before you can use the constructor
3. How would you describe a constructor and contextual “this” to a non-technical friend?
    * creates the object with those properties of it, and it's all customizable

## [Using Express Routing](https://expressjs.com/en/guide/routing.html)

1. Within Express, what does routing refer to?
    * allows different paths to retrieve different information based on additional variables
2. What is the difference between a route path and a route method?
    * path takes you to that page only, no queries and other information can be passed along. method are get/post/etc to accomplish the task
3. When is it appropriate to add next as a parameter to a route handler and what must you do if next has been passed to your middleware as a parameter?
    * so the function can continue to move to the next iteration

## [Express Routing](https://scotch.io/tutorials/learn-to-use-the-new-router-in-expressjs-4)

1. What is an Express Router?
    * Middleware which allows creation of modular, mountable route handlers.
2. By what mean do we initialize express.Router() in an express server?
    * Install required files for making the basic server framework.
3. What do we use route middleware for?
    * Respond to different endpoints from the browser and handles CRUD operations with each route.

### Things I want to know more about
