let numeroEscolhido = 7;
let andares = 0;
let simbolo = "*";

for (let index = numeroEscolhido; index >= 1; index -= 2) {
  andares += 1;
}

let espacos = andares;
let i = "";

for (let construcao = andares; construcao >= 1; construcao -= 1) {
  let vazio = "";
  for (
    let numeroEspacos = espacos - 1;
    numeroEspacos >= 1;
    numeroEspacos -= 1
  ) {
    vazio += " ";
  }
  espacos -= 1;

  if (construcao === andares) {
    console.log(vazio + simbolo);
    i += " ";
  } else if (construcao !== 1) {
    console.log(vazio + simbolo + i + simbolo);
    i += "  ";
  } else {
    for (
      let multiplicadorBase = numeroEscolhido;
      multiplicadorBase > 1;
      multiplicadorBase -= 1
    ) {
      simbolo += "*";
    }
    console.log(simbolo);
  }
}
