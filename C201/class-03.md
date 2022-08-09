# Notes for Class 03

## Learn HTML (ordered/unordered lists)

### Questions

1. When should you use an unordered list in your HTML document?
   * When the importance of the order is not important
2. How do you change the bullet style of unordered list items?
   * CSS style the list
3. When should you use an ordered list vs an unorder list in your HTML document?
   * When you want to show an order to do something is important and needs to be remembered
4. Describe two ways you can change the numbers on list items provided by an ordered list?
   * List items can be changed using ```<ol type="i">``` for Roman numerals, a for lowercase, A for uppercase, I for upper roman.

## Learn CSS (Box Model)

### Questions

1. Describe the CSS properties of margin and padding as characters in a story. What is their role in a story titled: “The Box Model”?
   * They are like children sharing a room. Always fighting over the room, and both somewhat in control. *Margin* can move the box over and back on itself. While *Padding* can only give himself distance between things.
2. List and describe the four parts of an HTML elements box as referred to by the box model.
    * Content Box - area where actual content is displayed
    * Padding Box - sides around *Content*
    * Border Box - wraps around *Padding* and *Content*
    * Margin Box - surrounds *Border Box* and *Padding* and *Content*

## Learn JS (Arrays, Operators and Expressions, Conditionals, Loops)

### Questions

1. What data types can you store inside of an Array?
    * single objects that contain multiple values stored in a list
2. Is the people array a valid JavaScript array? If so, how can I access the values stored? If not, why?

> "const people = [['pete', 32, 'librarian', null], ['Smith', 40, 'accountant', 'fishing:hiking:rock_climbing'], ['bill', null, 'artist', null]];"

    * Yes, I think it is valid. You could access by ```people[0] = "bob"``` or ```console.log(people[2]``` for 'bill'

3. List five shorthand operators for assignment in javascript and describe what they do.
    * = assigns value
    * += adds one to value
    * *= multiplication
    * **= exponentiation raises value to right operand  
    * %= divides by right operand assigns remainder to variable
4. Read the code below and evaluate the last expression and explain what the result would be and why.

  > let a = 10;
  > let b = 'dog';
  > let c = false;
  >
  >// evaluate this
  >(a + c) + b;

    * It would not compute. Comparison of number to string to boolean are impossible to evaluate here.

5. Describe a real world example of when a conditional statement should be used in a JavaScript program?
   * **IF** (ha...) there is an outcome that may be one way or the other depending on the question asked. Getting a more direct answer, or tailoring the response to the answers..
6. Give an example of when a Loop is useful in JavaScript.
   * They can help to check if something is filled out or when a condition is met/unmet
