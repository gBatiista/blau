// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = async () => {
  // Adicionar lógica aqui!
  const myObject =  {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  }
  const response = await fetch(API_URL, myObject)
  const data = await response.json();
  
  return data.joke;
};

async function createJoke() {
  const h2DOM = document.querySelector('#jokeContainer');
  const joke = await fetchJoke()

  h2DOM.innerText = joke;
}


window.onload = () => createJoke();