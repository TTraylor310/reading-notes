# Notes for Class 02

## [Intro to NodeJS and Express](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction)

1. Explain middleware, answer as though I were a non-technical recruiter.\
    * It's a go between for using JavaScript to create web pages, which are responsive and dynamic with constant updates and features, more easy for the user to interact with and the developer to create this experience
2. Express the most popular __ __ ____.
    * **Node web framework**
3. Express is “un-opinionated.” What does that mean?
    * the structure requirements are loose which allow developers to use unlimited amounts of middleware really
4. What is a module and why is modularity useful to us as developers?
    * Easy to swap pieces and parts in and out. Allows for teamwork and collaboration much easier.

## [What is NPM?](https://docs.npmjs.com/getting-started/what-is-npm)

1. What version of npm are you running on your machine?
    * **8.19.1**
2. What command would you type to install a library/package called ‘jshint’ into your node project?
    * npm i jshint

## [What is TDD?](https://www.agilealliance.org/glossary/tdd/)

1. Explain why tests are important. Please explain as though I were your non technical elder.
    * used to ensure basic functions are working as intended from the start, rather than fix it later
2. What are three expected benefits of testing
    * _many teams report significant reductions in defect rates, at the cost of a moderate increase in initial development effort_
    * _the same teams tend to report that these overheads are more than offset by a reduction in effort in projects’ final phases_
    * _although empirical research has so far failed to confirm this, veteran practitioners report that TDD leads to improved design qualities in the code, and more generally a higher degree of “internal” or technical quality, for instance improving the metrics of cohesion and coupling_
    > cited from above reference
3. Name at lest 2 individual pitfalls and at least 2 team pitfalls commonly encountered while writing tests.
    * writing too many tests at once
    * forgetting to run tests frequently

## [CI/CD](https://www.youtube.com/watch?v=xSv_m3KhUO8)

1. What are three benefits of Continuous Integration?
    * combine all code together
    * catch bugs
    * reduce merge conflicts
2. What is the difference between Continuos Delivery and Continuous Deployment?
    * _Delivery_ could be released anytime. _Deployment_ new features deployed immediately
3. Explain how GitHub fits into this process assuming the listener comes from a non-technical background
    * runs checks to see what changes and if it can be merged with main branch

### Bookmark and Review

* [NodeJS Docs](https://nodejs.org/en/docs/)
* [NPM Docs](https://docs.npmjs.com/)
* [Express Docs](https://expressjs.com/en/4x/api.html)
* [HTTP Status Codes](https://www.restapitutorial.com/httpstatuscodes.html)
* [Supertest](https://github.com/visionmedia/supertest)
