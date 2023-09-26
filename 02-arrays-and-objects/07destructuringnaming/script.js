// setting object properties with same name as a variable

// const firstName = 'Juan';
// const lastName = 'Dela Cruz';
// const age = 30;

// const person = {
//     firstName: firstName,
//     lastName: lastName,
//     age: age
// }

// console.log(person.age);
// output: 30 (age)

const firstName = 'Juan';
const lastName = 'Dela Cruz';
const age = 30;

const person = {
  firstName,
  lastName,
  age,
};

console.log(person.age);

// Destructuring the code above
// const todo = {
//   id: 1,
//   title: 'magluto ng Scrammble Egg',
//   user: {
//     name: 'Juan',
//   },
// };

// const { id } = todo.id;
// console.log(id);

//more
const todo = {
  id: 1,
  title: 'magluto ng Scrammble Egg',
  user: {
    name: 'Juan',
  },
};

const { id, title } = todo.id;
console.log(id, title);
