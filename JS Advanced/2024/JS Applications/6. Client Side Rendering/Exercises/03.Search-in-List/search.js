import { html, render } from './node_modules/lit-html/lit-html.js';
import { towns } from './towns.js';
search();

function search() {
   const townsElementRef = document.getElementById('towns');
   const searchElementRef = document.getElementById('searchText');
   const resultElementRef = document.getElementById('result');
   const btnElementRef = document.querySelector('button');
   btnElementRef.addEventListener('click', match);

   let allTowns = (towns) => html`
      <ul>
         ${towns.map(town => html`<li>${town}</li>`)}
      </ul>`;

   render(allTowns(towns), townsElementRef);

   function match() {
      let searchPhrase = searchElementRef.value;
      let townsSearch = Array.from(townsElementRef.children[0].children);
      let count = 0;
      if (!searchPhrase) {
         return;
      }

      townsSearch.forEach(town => {
         if(town.textContent.includes(searchPhrase)) {
            town.classList.add('active');
            count++;
         } else {
            town.classList.remove('active');
         }
      });

      resultElementRef.textContent = `${count} matches found`;
   }
}


// Todor
// document.querySelector('button').addEventListener('click', search);

// const townsElementRef = document.getElementById('towns');
// const searchElementRef = document.getElementById('searchText');
// const resultElementRef = document.getElementById('result');

// renderView();

// function renderView(match) {
//    render(createUlTemplate(towns, match), townsElementRef);
// }

// function createUlTemplate(towns, match) {
//    return html`<ul>${towns.map(town => createLiTemplate(town, match?.includes(town)))}</ul>`;
// }

// function createLiTemplate(town, isActive) {
//    return html`<li class=${isActive ? 'active' : ''}>${town}</li>`;
// }

// function search() {
//    const searchText = searchElementRef.value;
//    const match = towns.filter(town => town.includes(searchText));
//    renderView(match);
//    renderMatchCount(match.length);
// }

// function renderMatchCount(count) {
//    render(html`${count} matches found`, resultElementRef);
// }
