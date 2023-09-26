//define functions
function sayHello() {
  console.log('hello baby!');
}

//invoke / execute / call the function
sayHello();

//define a function with parameters
function add(num1, num2) {
  //num1 & 2 are parameters
  console.log(num1 + num2);
}

add(5, 10); //5 and 10 are arguements

function subtract(num1, num2) {
  return num1 - num2;
}

console.log(subtract(10, 2));
