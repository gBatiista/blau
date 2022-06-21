const a = 40;
const b = 80;
const c = 60;

if (a <= 0 || b <= 0 || c <= 0) {
  console.log("Erro nos ângulos.");
} else {
  if (a + b + c === 180) {
    console.log(true);
  } else {
    console.log(false);
  }
}
