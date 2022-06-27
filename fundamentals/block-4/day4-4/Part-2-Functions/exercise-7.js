function verificarStringFinal(word, ending) {
  let contador = 0;
  for (let index = 1; index <= ending.length; index += 1) {
    if (word[word.length - index] === ending[ending.length - index]) {
      contador += 1;
    }
  }

  if (contador === ending.length) {
    return true;
  } else {
    return false;
  }
}

console.log(verificarStringFinal('trybe', 'be'));