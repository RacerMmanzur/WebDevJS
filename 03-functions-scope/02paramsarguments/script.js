//PARAMS ARGUE
function registerUser(user) {
  return user + 'is registered';
}

console.log(registerUser('Ryan'));
console.log(registerUser());

//#############################
//DEFAULT
function registerUser(user) {
  if (!user) {
    user = 'Robot';
  }
  return user + 'is registered';
}

console.log(registerUser('Ryan'));
console.log(registerUser());

//##############################
//REST PARAMS
function sum(...numbers) {
  let total = 0;
  for (const num of numebers) {
    total += num;
  }
  return numbers;
}

console.log(sum(1, 2, 3, 4, 5, 6, 100));
//##############################
//object as params
function loginUser(user) {
  return `The user ${user.name} with the id of ${user.id} is logged in`;
}

const user = {
  id: 1,
  name: 'Aldnen',
};

console.log(loginUser(user));
console.log(loginUser({ id: 2, name: 'Catcat' }));
//##############################
//Arrays as params
function getRandom(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const item = arr[randomIndex];
  console.log(item);
}

getRandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//##############################
//spread op
function getRandom(...arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const item = arr[randomIndex];
  console.log(item);
}

getRandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
//##############################
