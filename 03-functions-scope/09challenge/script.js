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

  console.log(
    `The rectangle's dimensions are: length = ${length}, width = ${width}`
  );
})();
