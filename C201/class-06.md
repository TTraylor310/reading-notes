# Notes for Class 06

## JavaScript [Object Basics](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)

### Questions

1. How would you describe an object to a non-technical friend you grew up with?
    * grouping of variables and functions inside a tool which can be used, changed, referenced
2. What are some advantages to creating object literals?
    * write out the object contents as you come to create it
    * when you want to transfer a series of structured, related data items in some manner
3. How do objects differ from arrays?
    * sending single object is more efficient than sending several items individually
4. Give an example for when you would need to use bracket notation to access an object’s property instead of dot notation.
    * when object property name is defined at runtime
5. Evaluate the code below. What does the term this refer to and what is the advantage to using this?
    * refers to the object it is part of; can access parts in the same object and report out

> const dog = {
  name: 'Spot',
  age: 2,
  color: 'white with black spots',
  humanAge: function (){
    console.log(`${this.name} is ${this.age*7} in human years`);
  }
 }

## [Intro to the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)

### Questions

1. What is the DOM?
    * structural representation of the document available from a single, consistent API
2. Briefly describe the relationship between the DOM and JavaScript.
    * document as a whole: head, tables within doc, table headers, text within table cells, and all other elements

#### Links

1. [*Understanding problem domain* is **hardest** part of programming.](http://simpleprogrammer.com/2013/07/15/understanding-the-problem-domain-is-the-hardest-part-of-programming)
2. [Difference between *primitive values* and *object references* in JavaScript](https://betterprogramming.pub/intermediate-javascript-whats-the-difference-between-primitive-values-and-object-references-e863d70677b)
