import React from "react";

function Message(){
    function sayHello(){
        console.log("Hello"); //undefined
    }
    return (
        <button onClick={sayHello}>Click me!</button>
    );
}
export default Message; 
//When we click the button, it calls the function sayHello and logs 'undefined' to the console because in JavaScript, when a method is
//When we click the button, it will call the method sayHello() and this inside of that method refers to window object because there is no specific
//When we click the button, it calls the sayHello() method and logs 'undefined' to the console because in JavaScript, when a function
  