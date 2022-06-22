let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somatorio = 0

for (let index = 0; index < numbers.length; index += 1) {
    somatorio += numbers[index]
}

let mediaAritmetica = somatorio / numbers.length

console.log(mediaAritmetica);