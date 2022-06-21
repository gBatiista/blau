const salarioBruto = 20280;
let salarioBase;
let salarioLiquido;

const aliquotaInss8 = (salarioBruto * 8) / 100;
const aliquotaInss9 = (salarioBruto * 9) / 100;
const aliquotaInss11 = (salarioBruto * 11) / 100;
const aliquotaInssMax = 570.88;

if (salarioBruto <= 1556.94) {
  salarioBase = salarioBruto - aliquotaInss8;
} else if (salarioBruto <= 2594.92) {
  salarioBase = salarioBruto - aliquotaInss9;
} else if (salarioBruto <= 5189.82) {
  salarioBase = salarioBruto - aliquotaInss11;
} else {
  salarioBase = salarioBruto - aliquotaInssMax;
}

const aliquotaIr7 = (salarioBase * 7.5) / 100 - 142.8;
const aliquotaIr15 = (salarioBase * 15) / 100 - 354.8;
const aliquotaIr22 = (salarioBase * 22.5) / 100 - 636.13;
const aliquotaIr27 = (salarioBase * 27.5) / 100 - 869.36;

if (salarioBase <= 1903.98) {
  salarioLiquido = salarioBase;
} else if (salarioBase <= 2826.65) {
  salarioLiquido = salarioBase - aliquotaIr7;
} else if (salarioBase <= 3751.05) {
  salarioLiquido = salarioBase - aliquotaIr15;
} else if (salarioBase <= 4664.68) {
  salarioLiquido = salarioBase - aliquotaIr22;
} else {
  salarioLiquido = salarioBase - aliquotaIr27;
}

console.log("O salário líquido será de: R$ " + salarioLiquido);
