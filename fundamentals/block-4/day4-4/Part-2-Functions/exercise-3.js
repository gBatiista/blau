
function indiceMenorValor (array) {
    let menorValor = array[0]

    for (let index in array) {
        if (menorValor > array[index]) {
            menorValor = index
        }
    }
    return menorValor
}

console.log(indiceMenorValor([2, 4, 6, 7, 10, 0, -3]));