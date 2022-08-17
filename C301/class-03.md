# Notes for Class 3

## [React Docs - Lists and Keys](https://reactjs.org/docs/lists-and-keys.html)

1. What does .map() return?
    * array of equal length. it cycles through the array and can operate on each thing in the array
2. If I want to loop through an array and display each value in JSX, how do I do that in React?
    * Map funtion?
3. Each list item needs a unique ____.
    * Key
4. What is the purpose of a key?
    * Helps React *identify* which items have *CHANGED*, are added, or removed

## [Spread Operator](https://medium.com/coding-at-dawn/how-to-use-the-spread-operator-in-javascript-b9e4a8b06fab)

1. What is the spread operator?
    * *expands* iterable object into the list of arguments...
2. List 4 things that the spread operator can do.
    1. Copy an Array
    2. adding State in React
    3. combining objects
    4. combining arrays
3. Give an example of using the spread operator to combine two arrays.

    ``` let pics = ['pic 1', 'pic 2'];
        let nums = ['nums 1', 'nums 2'];
        let boths = [...[pics, nums]] ```

4. Give an example of using the spread operator to add a new item to an array.

    ``` let pics = ['pic 1', 'pic 2'];
        let new = [...pics, 'pic 3', 'pic 4']; ```

5. Give an example of using the spread operator to combine two objects into one.

    ``` let pics = ['pic 1', 'pic 2'];
        let nums = ['nums 1', 'nums 2'];
        let new = [...pics, ...nums]; ```

## Videos [How to Pass Functions Between Components](https://www.youtube.com/watch?v=c05OL7XbwXU)

1. In the video, what is the first step that the developer does to pass functions between components?
    * write the function in the parent
2. In your own words, what does the increment function do?
    * adds a value to the state/count
3. How can you pass a method from a parent component into a child component?
    * place in object in the render so it will pass down as the name passed
4. How does the child component invoke a method that was passed to it from a parent component?
    * this.props.name(of the thing you passed)

## Bookmark and Review

* [React Tutorial through 'Declaring a Winner'](https://reactjs.org/tutorial/tutorial.html)
* [React Docs - Lifting State Up](https://reactjs.org/docs/lifting-state-up.html)

### Things I Would Like To Know More About
