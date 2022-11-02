# Class 34 - API Integration

## Resources

## [Review API Server Build](https://codefellows.github.io/code-401-javascript-guide/curriculum/apps-and-libraries/api-server/)

1. Explain the different between a query string parameter and a path parameter.
    - Query string is something that will return multiple (or 1) item(s) that match the query. A path parameter will return the specific thing asked for. It could be number of things, or an individual item.
2. What would our API URL with a path id parameter be given the following information:
    - Domain: http://our-site.com
    - v3
    - model name: stuff 
    - id: things
        - http://our-site.com/api/v3/stuff/things
3. We have created a dynamic API with an “interface”. Describe how that interface works to a non-technical friend.
    - Allows us to pick the items to 'sort' out the things we want, and those we don't. It is a filter which changes what information is returned to the user.

## [Review Auth Server Build](https://codefellows.github.io/code-401-javascript-guide/curriculum/apps-and-libraries/auth-server/)

1. Describe how you would use middleware to implement basic and bearer auth.
    - Uses middleware to perform hash and login requirements. Uses basic to allow user to sign up/in and the user will get a token. That token will be used as bearer auth so the user won't need to sign in with password every single time they would want to perform an action that is behind the authorization window. 
2. Describe the handshake necessary to implement OAuth.
    - User signs up and sends information. 
    - Need to verify information is coming from good source, accepts and checks the info for accuracy stored in database or a new sign up as necessary. 
    - Permission is accepted or rejected based on the info passed and used. If good, token is sent along with credentials for use by system to allow access for reminder of session. Ensures that password is encrypted while sending across so it cannot be intercepted and changed/used maliciously.
3. Describe how Role Based Access Control works to a non-technical friend.
    - Those with the need to know, will know. Prevents access to others if not required or needed. Friends don't have access to your bank account because they don't need to see or know. If they did, would everyone be honest with your money?

## Additional Questions

1. What are your learning goals after reading and reviewing the class README?
    - Controlling the login and having a great understanding of how the system will update and send information. Really need to grasp the finer points because the data displayed should be protected and guarded to prevent outside personnel from changing or harming the data in anyway. 
