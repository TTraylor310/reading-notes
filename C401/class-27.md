# [Class 27 - `use state` Hook](https://codefellows.github.io/code-401-javascript-guide/curriculum/class-27)

## [Introducing Hooks](https://reactjs.org/docs/hooks-intro.html#motivation)

1. What was the motivation for introducing Hooks?
    - for functional react allows to change states without Classes
2. What changes are important regarding implementing Hooks versus Component Classes?
    - they work with the existing code and can be implemented over time to allow for code to catch up
3. Hooks allow you to reuse stateful logic without changing ___ _______.
    - component hierarchy

## [Hooks API](https://reactjs.org/docs/hooks-overview.html)

1. Name two rules imposed by React Hook usage.
    - call hooks at top level (outside of nested functions and complicated state changes)
    - react components only, not reg javascript
2. How would you identify a custom Hook and why might you create one?
    - starts with 'use', can use for ALL kinds of different things and is very customizable

## [the State Hook](https://reactjs.org/docs/hooks-state.html)

1. What is a Hook?
    - function which uses State and can manipulate other items without using Classes
2. When would I use the useState Hook?
    - add state changes to components
3. If you were to add React state to a function component by declaring a state variable:
    1. What does calling useState do?
        - declares 'state variable'
        - can keep items past a change of state and reuse older states
    2. What do we pass to useState as an argument?
        - initial state
    3. What does useState return?
        - returns pair of values - current value and function called it

## Bookmark and Review

- [Hooks API Reference](https://reactjs.org/docs/hooks-reference.html)

## Additional Questions

1. What are your learning goals after reading and reviewing the class README?
    - become master manipulator of state! :)
