# Class 36 - Application State with Redux

## [Dan Abramov Redux Tutorials](https://egghead.io/courses/getting-started-with-redux)

1. What is the first principle of Redux?
    - all states are represented as a single JavaScript Object
2. What is a store and what do we use our reducers for within that store?
    - place which holds all the state of the javascript application and is accessed or changed using functions which directly change and alter that store
3. Name three Redux store methods given to us by createStore and describe their use.
    - `getState()`
      - returns current state tree of application
    - `dispatch()`
      - only way to update the state is to call `store.dispatch()` and pass in object
    - `subscribe()`
      - adds a change listener, called when _dispatched_ and same state may change and new state needs to get called
4. Explain to a non-technical recruiter what `combineReducers()` does and why it is useful.
    - helps combine things into one step so other parts can access and have control of the state. More like a helper to get everything into the pie..

## Bookmark and Review

- [Worlds Easiest Guide to Redux](https://medium.freecodecamp.org/understanding-redux-the-worlds-easiest-guide-to-beginning-redux-c695f45546f6)
- [Testing Reducers](https://medium.com/@netxm/testing-redux-reducers-with-jest-6653abbfe3e1)
- [Redux Docs](https://redux.js.org/)

## Additional Questions

1. Looking ahead at this module’s course schedule, What do you look forward to learning?
    - better ways to manipulate state and make whole page applications which are able to manipulate the data displayed for maximizing user experience
2. What are your learning goals after reading and reviewing the class README?
    - Redux sounds like another tool in the chest for ways to manipulate the state and way we set up React, so more ways to display data dynamically and able to CHANGE the information in a more streamlined way
