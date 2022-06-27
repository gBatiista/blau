let array = [2, 3, 6, 7, 10, 1]

function indiceMaiorValor (array) {
    let maiorValor = array[0]

    for (let index in array) {
        if (maiorValor < array[index]) {
            maiorValor = index
        }
    }
    return maiorValor
}

console.log(indiceMaiorValor([2, 3, 6, 7, 10, 1]));