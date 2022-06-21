const pecaXadrez = "peão";

switch (pecaXadrez.toLowerCase()) {
  case "rei":
    console.log("O Rei anda uma casa para qualquer direção");
    break;
  case "rainha":
    console.log("A Rainha anda quantas casas quiser para qualquer direção");
    break;
  case "bispo":
    console.log("O Bispo anda quantas casas quiser para qualquer diagonal");
    break;
  case "torre":
    console.log("A Torre anda quantas casas quiser para na vertical ou horizontal");
    break;
  case "cavalo":
    console.log("O Cavalo anda em formato de L para qualquer direção podendo pular outras peças");
    break;
  case "peão":
    console.log("O Peão anda uma casa para frente, porém no primeito movimento pode ser duas casas.");
    break;
  default:
    console.log("Erro, peça não encontrada");  
}
