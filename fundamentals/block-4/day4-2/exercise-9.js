let numbers = [];

for (let index = 0; index < 25; index += 1) {
  numbers[index] = index + 1;
}

let numbersDivididoPor2 = []

for (let indexDivisao = 0; indexDivisao < numbers.length; indexDivisao += 1) {
    numbersDivididoPor2[indexDivisao] = (numbers[indexDivisao] / 2)
    
}
console.log(numbersDivididoPor2);
