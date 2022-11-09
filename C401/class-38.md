# Class 38 - Redux - Asynchronous Actions

## [Async Actions](https://redux.js.org/advanced/asyncactions)

1. Why use Redux middleware?
    - allows the functionality easier to make async calls so we can use servers for retrieval of info in a more timely fashion
2. Consider the Redux Async Data Flow Diagram. Describe the flow in your own words.
    - actions passed through middleware, and hits the API and back to return object
3. How are we accommodating async in our Redux app?
    - handles user even in the app, then can `dispatch` and pass function which will call middleware and then make the async call

## [Thunk Middleware](https://github.com/reduxjs/redux-thunk)

1. Why would you need `redux-thunk` middleware?
    - allows app to use async logic to update the store
2. Redux Thunk middleware allows you to write action creators that return a ____ instead of an action.
    - function
3. Describe how any return value from the inner thunk function will be made available.
    - it was return value of dispatch itself
