let numeroEscolhido = 11;

if (numeroEscolhido >= 2) {


  let numeroPrimo = true;
  for (let index = numeroEscolhido - 1; index >= 2; index -= 1) {
    if (numeroEscolhido % index === 0) {
      numeroPrimo = false;
    }
  }
  if (numeroPrimo) {
    console.log("O número", numeroEscolhido, "é primo.");
  } else {
    console.log("O número", numeroEscolhido, "não é primo.");
  }


} else {
    console.log('Número invalido, digite um número inteiro maior ou igual a 2.');
}
