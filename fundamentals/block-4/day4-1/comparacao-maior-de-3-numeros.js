const a = 20;
const b = 20;
const c = 15;

if (a > b && a > c) {
  console.log("O maior valor é: " + a);
} else if (b > a && b > c) {
  console.log("O maior valor é: " + b);
} else if (c > a && c > b) {
  console.log("O maior valor é: " + c);
} else {
  console.log("Os maiores números são iguais.");
}
