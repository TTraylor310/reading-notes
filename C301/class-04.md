# Notes for Class 4

## [React Docs - Forms](https://reactjs.org/docs/forms.html)

1. What is a ‘Controlled Component’?
    * React compoent that renders the component also controls what happens in that form on next user input
2. Should we wait to store the users responses from the form into state when they submit the form OR should we update the state with their responses as soon as they enter them? Why.
    * With every keystroke
3. How do we target what the user is entering if we have an event handler on an input field?
    * set value of setState on the input form

## [Conditional (Ternary) Operator Explained](https://codeburst.io/javascript-the-conditional-ternary-operator-explained-cac7218beeff);

1. Why would we use a ternary operator?
    * When want one value or the other only
2. Rewrite the following statement using a ternary statement:

        ```
            if(x===y){
            console.log(true);
            } else {
            console.log(false);
            } 
        ```
    
    ```
        let result = (x===y) ? console.log(true) : console.log(false);

## Bookmark and Review

* [React Bookstrap - Forms](https://react-bootstrap.github.io/forms/overview/)
* [React Docs - conditional redering](https://reactjs.org/docs/conditional-rendering.html)
