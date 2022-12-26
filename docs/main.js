const URL = 'http://localhost:5500/docs/quotes.json';

let res = await fetch(URL);
let quips = await res.json();
let quipCount = quips.length;
const index = Math.floor(Math.random() * (quipCount + 1));
const [author, quote] = quips[index];

const container = document.querySelector('#container');
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');

h1.innerText = quote;
h2.innerText = `- ${author}`;

setTimeout(() => {
  container.style.opacity = 1
}, 250);