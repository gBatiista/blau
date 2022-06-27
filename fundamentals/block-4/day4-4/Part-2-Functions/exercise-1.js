function verificaPalindromo (word) {
    let comparador = word.split('')
    let inverso = comparador.reverse()
    let textoInverso = inverso.join('')

    if (textoInverso === word) {
        return true
    } else {
        return false
    }
}

console.log(verificaPalindromo('arara'));