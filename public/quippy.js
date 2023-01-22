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

(async function () {
  window.addEventListener("load", setMainElementHeight);
  window.addEventListener("resize", setMainElementHeight);

  const host = document.location.origin;
  const URL = `${host}/quotes.json`;

  const res = await fetch(URL);
  const quips = await res.json();
  const quipCount = quips.length;
  const index = Math.floor(Math.random() * (quipCount + 1));
  const { author, quote } = quips[index];

  const container = document.querySelector("#quote");
  const h1 = document.createElement("h1");
  const h2 = document.createElement("h2");
  container.append(h1, h2);

  h1.innerText = quote;
  h2.innerText = `- ${author}`;

  setTimeout(() => {
    container.style.opacity = "1";
  }, 250);
})();

// iOS Safari's toolbar affects the viewport dimensions for the
// screen: 100vh is initially set assuming that the toolbar is
// hidden. However, if the toolbar is displayed then the <main>
// content of the window is larger than the available viewport.
// This negatively impacts the layout and visibility of elements.
// Accordingly, the height of the <main> element must be recalculated
// immediately on page load and then again everytime that vh changes.
function setMainElementHeight() {
  const main = document.querySelector("main");
  const header = document.querySelector("header");
  const footer = document.querySelector("footer");
  const headerHeight = header?.getBoundingClientRect().height ?? 0;
  const footerHeight = footer?.getBoundingClientRect().height ?? 0;
  main.style.height = `${window.innerHeight - headerHeight - footerHeight}px`;
}
