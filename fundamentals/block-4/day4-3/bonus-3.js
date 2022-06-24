let tamanhoQuadrado = 5;
let cloneTamanhoQuadrado = tamanhoQuadrado;
let simbolo = "";

for (let index = 1; index <= tamanhoQuadrado; index += 1) {
  let espaco = "";
  for (let count = cloneTamanhoQuadrado - 1; count >= 1; count -= 1) {
    espaco += " ";
  }
  cloneTamanhoQuadrado -= 1;

  simbolo += "*";
  console.log(espaco + simbolo);
}
