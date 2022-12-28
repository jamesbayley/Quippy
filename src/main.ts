// Reflective quips and quotes.
// Copyright (C) 2022 <James S. Bayley>
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published
// by the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.

interface Quote {
  author: string;
  quote: string;
  source: string;
  tags: string[];
}

void (async function main() {
  const host = document.location.origin;
  const URL = `${host}/quotes.json`;

  const res = await fetch(URL);
  const quips: Quote[] = await res.json();
  const quipCount = quips.length;
  const index = Math.floor(Math.random() * (quipCount + 1));
  const { author, quote } = quips[index];

  const container = document.querySelector("#container") as HTMLElement;
  const h1 = document.querySelector("h1") as HTMLElement;
  const h2 = document.querySelector("h2") as HTMLElement;

  h1.innerText = quote;
  h2.innerText = `- ${author}`;

  setTimeout(() => {
    container.style.opacity = "1";
  }, 250);
})();
