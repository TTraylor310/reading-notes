# Notes for Class 2

## [React lifecycle](https://medium.com/@joshuablankenshipnola/react-component-lifecycle-events-cb77e670a093)

1. Based off the diagram, what happens first, the ‘render’ or the ‘componentDidMount’?
    * Render phase is before the pre-commit phase and is earlier than componentDidMount
2. What is the very first thing to happen in the lifecycle of React?
    * constructor is called before mountedd
3. Put the following things in the order that they happen: componentDidMount, render, constructor, componentWillUnmount, React Updates
    * Constructor, Render, React Updates, componentDidMount - render, updates, componentDidUpdate
4. What does componentDidMount do?
    * used to load anything which uses a network request or initialize the DOM should go in this section

## [React State VS Props](https://www.youtube.com/watch?v=IYvD9oBCuJI)

1. What types of things can you pass in the props?
    * any component information that you will wish to use
2. What is the big difference between props and state?
    * state is something INSIDE of component. props are passed INTO the component
3. When do we re-render our application?
    * when state is changed, it will re-render
4. What are some examples of things that we could store in state?
    * something that needs to change on screen and need to re-render

## Bookmark and Review

* [React Docs - State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)
* [React Docs - handling events](https://reactjs.org/docs/handling-events.html)
* [React Tutorial through ‘Developer Tools’](https://reactjs.org/tutorial/tutorial.html)
* [React Bootstrap Documentation](https://react-bootstrap.github.io/)
* [Boootstrap Cheatsheet](https://getbootstrap.com/docs/5.0/examples/cheatsheet/)
* [Bootstrap Shuffle - a class “sandbox”](https://bootstrapshuffle.com/classes)
* [Netlify](https://www.netlify.com/)

## Things I Would Like To Know More About
