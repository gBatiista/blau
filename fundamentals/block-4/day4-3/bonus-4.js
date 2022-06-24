let numeroEscolhido = 5; //versão somente para números ímpares.
let andares = 0;
let simbolo = "*";

for (let index = numeroEscolhido; index >= 1; index -= 2) {
  andares += 1;
}

let espacos = andares;

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

  console.log(vazio + simbolo);
  simbolo += "**";
}

