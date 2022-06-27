function somatorio(num) {
  let resultado = 0;
  for (let index = num; index >= 1; index -= 1) {
    resultado += index;
  }
  return resultado;
}

console.log(somatorio(2));
