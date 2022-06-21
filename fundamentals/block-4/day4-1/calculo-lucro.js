const custo = 10;
const valorVenda = 20;

const custoTotal = custo + custo / 5;
const lucroMilUnidades = (valorVenda - custoTotal) * 1000;

if (custo >= 0 && valorVenda >= 0) {
  console.log("O lucro ao vender mil unidades será: R$ " + lucroMilUnidades);
} else {
  console.log("Erro, valores inválido");
}
