//blog post

const post = {
  id: 1,
  title: 'Post One',
  body: 'This is the body',
};

//convert to JSON String

const str = JSON.stringify(post);
// console.log(post);

// parse JSON
const obj = JSON.parse(str);
// console.log(obj);

//JSON & Arrays
const posts = [
  {
    id: 1,
    title: 'Post One',
    body: 'This is the body',
  },
  {
    id: 2,
    title: 'Post Two',
    body: 'This is the body',
  },
];

const str2 = JSON.stringify(posts);
console.log(str2);

// to access the id
console.log(str.id); //will not work
console.log(obj.id); //will not work
