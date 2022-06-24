let numerosPrimos = [];

for (let index = 2; index <= 50; index += 1) {
  let divisores = 0;
  for (let count = index - 1; count >= 2; count -= 1) {
    if (index % count === 0) {
      divisores += 1;
    }
  }

  if (divisores === 0) {
    numerosPrimos.push(index);
  }
}

console.log(numerosPrimos[numerosPrimos.length - 1]);
