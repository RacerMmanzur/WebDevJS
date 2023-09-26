//challenge 1 solution
const getCelsius = (fahrenheit) => (fahrenheit - 32) * (5 / 9);

console.log(`The temperature is ${getCelsius(32)} \xB0C`);

//challenge 2 solution
const minMax = (num) => ({
  min: Math.min(...num),
  max: Math.max(...num),
});

console.log(minMax([1, 2, 3, 4, 5]));

//challenge 3 solution
(function () {
  const length = 45;
  const width = 7;
  const area = length * width;

  console.log(
    `The area of a rectangle with a length of ${length} and a width of ${width} is ${area}.`
  );
})();
