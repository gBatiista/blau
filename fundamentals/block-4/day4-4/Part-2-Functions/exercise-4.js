
function maiorNome(array) {
  let maisCaracteres = array[0];

  for (let index of array) {
    if (index.length > maisCaracteres.length) {
      maisCaracteres = index;
    }
  }
  return maisCaracteres;
}

console.log(maiorNome(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]));