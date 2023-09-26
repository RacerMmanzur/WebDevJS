//step 1
const library = [
  {
    title: 'Harry Pot 1',
    author: 'Wed',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'Harry Pot 2',
    author: 'Wed',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'Harry Pot 3',
    author: 'Wed',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

//step 2
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

//step 3
const { title: firstbook } = library[0];
console.log(firstbook);

const libJSON = JSON.stringify(library);
console.log(libJSON);
