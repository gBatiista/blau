function encode(string) {   
    let result = '';
  
    for (let valor of string) {
      if (valor === 'a') {
        result += '1';
      } else if (valor === 'e') {
        result += '2';
      } else if (valor === 'i') {
        result += '3';
      } else if (valor === 'o') {
        result += '4';
      } else if (valor === 'u') {
        result += '5';
      } else {
        result += valor;
      }
    }
  
    return result;
  }
  function decode(string) {
    let result = '';
  
    for (let valor of string) {
      if (valor === '1') {
        result += 'a';
      } else if (valor === '2') {
        result += 'e';
      } else if (valor === '3') {
        result += 'i';
      } else if (valor === '4') {
        result += 'o';
      } else if (valor === '5') {
        result += 'u';
      } else {
        result += valor;
      }
    }
  
    return result;
  }

  module.exports = {encode, decode};