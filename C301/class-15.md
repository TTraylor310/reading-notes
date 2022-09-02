# Notes for Class 15

## [What is OAuth](https://www.csoonline.com/article/3216404/what-is-oauth-how-the-open-authorization-framework-works.html)

1. What is OAuth?
    * open-standard authorization protocol or framework
    * describes how unrelated servers and services can safetly allow authenticated access to their assets without actually sharing the initial, related, single logon credential
    * known as "secure, 3rd party, use-agent- delegated authorization
2. Give an example of what using OAuth would look like.
    * one Site has log-in for another Site's logon and clicking link will log you on from other site onto the ORIGINAL site
    * (more )
3. How does OAuth work? What are the steps that it takes to authenticate the user?
    1. The first website connects to the second website on behalf of the user, using OAuth, providing the user’s verified identity.
    2. The second site generates a one-time token and a one-time secret unique to the transaction and parties involved.
    3. The first site gives this token and secret to the initiating user’s client software.
    4. The client’s software presents the request token and secret to their authorization provider (which may or may not be the second site).
    5. If not already authenticated to the authorization provider, the client may be asked to authenticate. After authentication, the client is asked to approve the authorization transaction to the second website.
    6. The user approves (or their software silently approves) a particular transaction type at the first website.
    7. The user is given an approved access token (notice it’s no longer a request token).
    8. The user gives the approved access token to the first website.
    9. The first website gives the access token to the second website as proof of authentication on behalf of the user.
    10. The second website lets the first website access their site on behalf of the user.
    11. The user sees a successfully completed transaction occurring.
    12. OAuth is not the first authentication/authorization system to work this way on behalf of the end-user. In fact, many authentication systems, notably Kerberos, work similarly. What is special about OAuth is its ability to work across the web and its wide adoption. It succeeded with adoption rates where previous attempts failed (for various reasons).
4. What is OpenID?
    * Different authoization based on having a single sign-in
    * *"OpenID is for humans logging into machines, OAuth is for machines logging into machines on behalf of humans"*

## [Authorization and Authentication flows](https://auth0.com/docs/flows)

1. What is the difference between authorization and authentication?
    * *"authentication is the process of verifying who a user is, while authorization is the process of verifying what they have access to"*
2. What is Authorization Code Flow?
    * when web apps are server-side the source code is not public, so use of Authoization Code for token
3. What is Authorization Code Flow with Proof Key for Code Exchange (PKCE)?
    * *"introduces a secret created by the calling application that can be verified by the authorization server; this secret is called the Code Verifier. Additionally, the calling app creates a transform value of the Code Verifier called the Code Challenge and sends this value over HTTPS to retrieve an Authorization Code. This way, a malicious attacker can only intercept the Authorization Code, and they cannot exchange it for a token without the Code Verifier."* [Diagram of Authorization Code Flow](../img/auth-sequence-auth-code-pkce.png)
4. What is Implicit Flow with Form Post?
    * uses OpenID Connect **(OIDC)** to implement web sign-in... *"The web app requests and obtains tokens through the front channel, without the need for secrets or extra backend calls. With this method, you don’t need to obtain, maintain, use, and protect a secret in your application."*
5. What is Client Credentials Flow?
    * where *"pass along their Client ID and Client Secret to authenticate themselves and get a token"* [Diagram of Client Cred Flow](../img/Client%20Credentials%20Flow.png)
6. What is Device Authorization Flow?
    * *"device asks the user to go to a link on their computer or smartphone and authorize the device*"
    * *"two different paths; one occurs on the device requesting authorization and the other occurs in a browser. The browser flow path, wherein a device code is bound to the session in the browser, occurs in parallel to part of the device flow path."* [Diagram of Device Authoization Flow](../img/auth-sequence-device-auth.png)
7. What is Resource Owner Password Flow?
    * *"requests that users provide credentials (username and password), typically using an interactive form"*
    * **"Because credentials are sent to the backend and can be stored for future use before being exchanged for an Access Token, it is imperative that the application is absolutely trusted with this information."**

### Bookmark and Review

* [AuthO for single page apps](https://auth0.com/docs/libraries/auth0-react)
