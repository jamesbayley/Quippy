type Quote = [string, string];

void (async function main() {
  const host = document.location.origin;
  const URL = `${host}/quotes.json`;

  const res = await fetch(URL);
  const quips: Quote[] = await res.json();
  const quipCount = quips.length;
  const index = Math.floor(Math.random() * (quipCount + 1));
  const [author, quote] = quips[index];

  const container = document.querySelector("#container") as HTMLElement;
  const h1 = document.querySelector("h1") as HTMLElement;
  const h2 = document.querySelector("h2") as HTMLElement;

  h1.innerText = quote;
  h2.innerText = `- ${author}`;

  setTimeout(() => {
    container.style.opacity = "1";
  }, 250);
})();
