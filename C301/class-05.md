# Notes for Class 5

## [React Docs - Thinking in React](https://reactjs.org/docs/thinking-in-react.html)

1. What is the single responsibility principle and how does it apply to components?
    * component should only do 1 thing. If it grows it should be decomposed into smaller subcomponents
2. What does it mean to build a ‘static’ version of your application?
    * a build which *renders the UI but has **no** interactivity*
3. Once you have a static application, what do you need to add?
    * state. interactivity to the site. Which also causes you to need a listener (function) and some object that will change the state
4. What are the three questions you can ask to determine if something is state?
    * is it passed in from a *parent* via props -prob not state
    * does it remain *unchanged* over time? -prob not state
    * able to compute based on any other state or props? -prob not state
5. How can you identify where state needs to live?
    * determines who owns the state;
        * Identify every component that renders based off *state*
        * find common owner of component
        * common owner *OR* another component higher up should OWN
        * if no clear determination, add in heirarchy above common compoent

## [Higher-Order Functions](https://eloquentjavascript.net/05_higher_order.html#h_xxCc98lOBK)

1. What is a “higher-order function”?
    * functions which *operate on other functions* (taking them as arguments or returning them)
2. Explore the greaterThan function as defined in the reading. In your own words, what is line 2 of this function doing?
    * checks when value > N (defined as 10 on 4th line), returns true when is greater than N
3. Explain how either map or reduce operates, with regards to higher-order functions.
    * map is another standard array method and will function as such

### Things I Would Like To Know More About

> Summing a range of numbers isn’t about loops and counters. It is about ranges and sums.
