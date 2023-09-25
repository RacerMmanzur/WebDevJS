//array literal
const numbers = [12, 45, 33, 29, 39];

//array constructor
const fruit = new Array('apple', 'grape', 'orange');

//get value by index
x = number[3];
x = numbers[0] + numbers[3];

//utilize template literals with array
x = `my favorite fruit is an ${fruits[2]}`;

//length
x = numbers.length;

//change orange with pears
fruits[2] = 'pear';
x = fruits[2];

//adding fruits to our array (hardcoded)
fruits[3] = 'strawberry';
fruits[fruits.length] = 'blueberry';
fruits[fruits.length] = 'peach';
fruits[fruits.length] = 'banana';

console.log(x);
