function arrayOfNumbers(vector) {
  let result = [];

  for (let numb of vector) {
    if (numb % 2 === 0) {
      result.push(numb);
    }
  }
  return result
}

console.log(arrayOfNumbers([1,2,3,4,5,6,7,8,9,10]));