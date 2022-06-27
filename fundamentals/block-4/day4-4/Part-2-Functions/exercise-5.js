function maisRepetido(array) {
  let contador = 0;
  let aparicoes = [];
  let maiorIndice = 0;
  let maiorNumero = 0;

  for (let index = 0; index < array.length; index += 1) {
    for (let index2 in array) {
      if (array[index] === array[index2]) {
        contador += 1;
      }
    }

    aparicoes[index] = contador;
    contador = 0;
  }

  for (let index = 0; index < aparicoes.length; index += 1) {
    if (aparicoes[index] > maiorNumero) {
      maiorNumero = aparicoes[index];
      maiorIndice = index;
    }
  }

  return array[maiorIndice];
}

console.log(maisRepetido([2, 3, 2, 3, 5, 5, 3]));
