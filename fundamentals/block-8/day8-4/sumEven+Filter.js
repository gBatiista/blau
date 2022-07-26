const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const getEven = (num) => num % 2 === 0;
const sumPair = (acc, curr) => acc + curr;

const result = (array) => array.filter(getEven).reduce(sumPair);

console.log(result(numbers));