const notaCandidato = 10;

let estatosCandidato

if (notaCandidato >= 80) {
  estatosCandidato = "aprovado";
} else if (notaCandidato < 80 && notaCandidato >= 60) {
  estatosCandidato = "lista";
} else {
  estatosCandidato = "reprovado";
}

switch (estatosCandidato) {
  case "aprovado":
    console.log("Parabéns, você foi aprovada(o)");
    break;

  case "reprovado":
    console.log("Você foi reprovada(o)");
    break;

  case "lista":
    console.log("Vocẽ está na nossa lista de espera");
    break;

  default:
    console.log("Não se aplica");
}
