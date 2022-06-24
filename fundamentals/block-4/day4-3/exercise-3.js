let array = ["java", "javascript", "python", "html", "css"];
let biggerWord = array[0];
let smallestWord = array[0];

for (let index = 0; index < array.length; index += 1) {
  if (array[index].length > biggerWord.length) {
    biggerWord = array[index];
  }
  if (array[index].length < smallestWord.length) {
    smallestWord = array[index];
  }
}

console.log("A maior palavra é:", biggerWord);
console.log("A menor palavra é:", smallestWord);
