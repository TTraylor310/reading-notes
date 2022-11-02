# Class 33 - `<Login />` and `<Auth />`

## Resources

## [What is Role Based Access Control (RBAC)?](https://digitalguardian.com/blog/what-role-based-access-control-rbac-examples-benefits-and-more)

1. What is Role Based Access Control (RBAC)?
    - Those who need the information are the only ones who have access to it. It is based on need-to-know
2. Share some an example of RBAC including all possible CRUD operations and correlating roles.
    - School database access is based around those who need to know who's data. For instance, the gym teacher should not be able to see all students grades and records. Office admin probably needs full CRUD access to the database to update records.
3. What are the Benefits of RBAC?
    - It can help control who has access to sensitive information (PPI), that could cause lots of problems. Company's have a responsibility to protect identifying information about clients and guard that data. If there was a mistake or some information was released, it might be easier to track down who the responsible party was.

## Compare and Contrast the following two Libraries and the following questions. Yes, they are similarly named.

- [react-cookie library](https://www.npmjs.com/package/react-cookie)
- [react-cookies component](https://www.npmjs.com/package/react-cookies)

1. Describe some react-cookie features.
    - can access and modify using React hooks
    - supports customization of attributes associated with those cookies
    - allows get, getAll, set, remove (basic CRUD ops for cookies)
2. Describe some react-cookies features.
    - uses API and is attached to a specific cookie directly
    - looks like this *cookies* is a class and has methods attached directly to it
3. Which library would you prefer would you prefer? Why?
    - __cookie__ because I think the ability to change with React hooks is useful for componentizing the pages and allowing access might be easier to control that way

## Additional Questions

1. What are your learning goals after reading and reviewing the class README?
    - want to see how this Auth is important and how it relates to Auth0 on the backend. Making a server/website secure is extremely important in this day and age. I want to be able to access locations and give owners of websites the security to have confidence in the system to protect information.
