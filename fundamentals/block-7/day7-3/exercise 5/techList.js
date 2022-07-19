function techList(array, string) {
    let result = [{}];
  
    if (array === undefined || array.length === 0 || string.length === 0) {
      return 'Vazio!';
    }
    array.sort();
  
    for (let index in array) {
      result[index] = {
        tech: array[index],
        name: string,
      };
    }
  
    return result;
  }

  module.exports = techList;