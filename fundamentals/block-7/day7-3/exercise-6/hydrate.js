function hydrate(string) {
    let numbers = /\d+/g;
    let numberArray = string.match(numbers);
    let waterGlasses = 0;
  
    for (let index in numberArray) {
      waterGlasses += parseInt(numberArray[index]);
    }
  
    if (waterGlasses === 1) {
      return waterGlasses + ' copo de água';
    } else {
      return waterGlasses + ' copos de água';
    }
  }

  module.exports = hydrate;