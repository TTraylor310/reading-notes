# Notes for Class 07

## [Intro to JWT](https://jwt.io/introduction/)

1. What is a JSON Web Token (JWT)?
    * JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object.
2. When should we use JSON Web Tokens?
    * during authorization or information exchange
3. Claims are expected in which structural component of a JWT?
    * In its compact form, JSON Web Tokens consist of three parts separated by dots (.), which are:
        * Header
        * Payload
        * Signature
    * The second part of the token is the payload, which contains the claims.
        * Claims are statements about an entity (typically, the user) and additional data. There are three types of claims: registered, public, and private claims.

## [Are JWTs Secure](https://stackoverflow.com/questions/27301557/if-you-can-decode-jwt-how-are-they-secure)

1. If I get a JWT and I can decode the payload, how can we call that secure?
    * the payload encrypted separate from JWT
2. If sending a JWT, what must sender and receiver both know? Hint, it’s appended in the signature.
    * Calculated value of the hash payload and secret
3. Explain how concatenated content and secret can be sent and received securely to a non-technical recruiter.
    * The key is a decrypted legend for a map in order to get the password.

## [JWTs Explained](https://www.youtube.com/watch?v=926mknSW9Lo)

1. Why use JWT?
    * Information can be trusted and verified because it is digitally signed.
2. JWT is Compact and self-contained. Describe how this is useful to a non-technical friend.
    * Is very small so doesn't affect the speed of the system which it is ran on. It moves through with the other information so it does not bottle neck the data.
3. What are the three components (the structure) of a JWT signature?
    * Header
    * Payload
    * Signature

### Bookmark and Review

* [npm jsonwebtoken docs](https://www.npmjs.com/package/jsonwebtoken)
