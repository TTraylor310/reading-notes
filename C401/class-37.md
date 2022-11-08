# Class 37 - Redux - Combined Reducers

## [Multiple Reducers Example](https://www.youtube.com/watch?v=gBER4Or86hE)

1. Why create multiple reducers?
    - able to split out application very wide and diverse
2. How would you combine multiple reducers?
    - `combineReducers` is part of Redux and is able to handle that need
3. How will you manage state as an immutable object? why?
    - return copy of state with any changes

## [Redux Docs: Using Combined Reducers](https://redux.js.org/recipes/structuring-reducers/using-combinereducers/)

1. `combineReducers` is a utility function to simplify the most common use case when writing ___ _____ .
    - redux reducers
2. Explain how `combineReducers` assembles the new state tree.
    - calls all the 'reducers' to update the part of the state
3. How would you define initial state in an app using `combineReducers`?
    - from `createStore` is able to have an initial (preLoadedState)

## [Redux Docs: Combined Reducer Syntax](https://redux.js.org/api/combinereducers/)

1. Why will you want to split your reducing functions as your app becomes more complex?
    - separate functions and those can manage state independently
2. The _____ helper function turns an object whose values are different reducing functions into a single reducing function you can pass to ____.
    - `combineReducers`
    - `createStore`
3. What is a popular convention when naming reducers?
    - sliced state XXX

## Additional Questions

1. What are your learning goals after reading and reviewing the class README?
    - more STATE mastery!
