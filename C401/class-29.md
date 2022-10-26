# [Class 29 - Advanced State with Reducers](https://codefellows.github.io/code-401-javascript-guide/curriculum/class-29)

## [`useReducer` Hook](https://reactjs.org/docs/hooks-reference.html#usereducer)

1. Name an alternative to the `useState` Hook.
    - `useReducer`
2. Why might the `useReducer` Hook be preferable to the `useState` Hook?
    > when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one
    > optimize performance for components that trigger deep updates because you can pass dispatch down instead of callbacks
3. What are two ways to set the initial state?
    - pass initial state as 2nd argument
    - pass an init function as the third argument "init(initialArg)"

## [Ultimate Guide to `useReducer`](https://blog.logrocket.com/guide-to-react-usereducer-hook/)

1. In terms of state, what does `useReducer` expect to receive as a parameter?
    - reducer function as 1st parameter, initial state as 2nd parameter
2. What does `useReducer` return?
    - array which holds state value and `dispatch` function which can be called later
3. Explain `dispatch` to a non-technical recruiter.
    - saves something for later to be called upon in a custom format and allows to update the first time it was initialized

## Additional Questions

1. What are your learning goals after reading and reviewing the class README?
    - more react state manipulation. master manipulator is where you can play with state up and down.. well
        > Pass state down, info goes up...
