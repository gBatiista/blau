function tradutorNumerosRomanos(string) {
  let numerosRomanos = {
    I: 1,
    IV: 4,
    V: 5,
    IV: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  };
  let numeros = [];
  let contador = 0;

  for (let valor of string) {
    for (let comparador in numerosRomanos) {
      if (valor === comparador) {
        numeros[contador] = numerosRomanos[comparador];
        contador += 1;
      }
    }
  }

  let resultado = 0;

  for (let index in numeros) {
    if (index > 0) {
      if (numeros[index] <= numeros[index - 1]) {
        resultado += numeros[index];
      } else {
        resultado -= numeros[index - 1];
        resultado += numeros[index] - numeros[index - 1];
      }
    } else {
      resultado += numeros[0];
    }
  }

  return resultado;
}


console.log(tradutorNumerosRomanos("MMMMMCCCXXXVI"));


