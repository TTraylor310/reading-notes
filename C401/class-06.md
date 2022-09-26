# Notes for Class 06

## [Securing Passwords](https://thehackernews.com/2014/04/securing-passwords-with-bcrypt-hashing.html)

1. Explain to a non-technical friend how you would safely hash and store a password.
    * having a 3rd system in order to give you a result instead of the password itself
2. What is Bcrypt?
    * adaptive function based on a different cipher to allow for complex passwords
3. Why might you use something like Bcrypt?
    * reduce impact of brute force attacks

## [Basic Auth](https://en.wikipedia.org/wiki/Basic_access_authentication)

1. What is Basic Authentication?
    * basic was for user to have password and login for making a request
2. What properties are necessary in the header of a Basic Auth request?
    * Authorization: Basic `<credentials>`
3. How are username:password in Basic Auth encoded?
    * with [Base64](https://en.wikipedia.org/wiki/Base64)

## OWASP auth cheatsheet

1. Define the authentication process to a non-technical recruiter.
    * allows use to be verified and ensure they meet the credentials
2. How should your error messaging respond (both HTTP and HTML)? Why?
    * Generic, both. But should only show the error and what caused it, not any amplifying information.

### Bookmark and Reivew

* [bcrypt docs](https://www.npmjs.com/package/bcrypt)
