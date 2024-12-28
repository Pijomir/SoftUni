import { searchFruit } from '../data/fruitsData.js';
import { html, render } from '../lib.js';
import { createSubmitHandler } from '../util.js';

const searchTemplate = (onSearch, result) => html`
<section id="search">
  <div class="form">
    <h2>Search</h2>
    <form class="search-form" @submit=${onSearch}>
      <input
        type="text"
        name="search"
        id="search-input"
      />
      <button class="button-list">Search</button>
    </form>
  </div>
  <h4>Results:</h4>
  ${result ? showResultTemplate(result) : ''}  
</section>`;

const showResultTemplate = (result) => html`
<div class="search-result">
  ${result.length ? result.map(x => html`
  <div class="fruit">
    <img src=${x.imageUrl} alt="example1" />
    <h3 class="title">${x.name}</h3>
    <p class="description">${x.description}</p>
    <a class="details-btn" href="/catalog/${x._id}">More Info</a>
  </div>`) : html`<p class="no-result">No result.</p>`}
</div>`;

export function showSearch() {
    render(searchTemplate(createSubmitHandler(onSearch)))
}

async function onSearch(data, form) {
  const {search} = data;
  if (!search) {
    return alert('No Query');
  }

  const result = await searchFruit(search);
  render(searchTemplate(createSubmitHandler(onSearch), result));
}





/*

 <p class="no-result">No result.</p>
  <!--If there are matches display a div with information about every fruit-->
 <div class="fruit">
  <img src="./images/fruit 1.png" alt="example1" />
  <h3 class="title">Pineapple</h3>
  <p class="description">The pineapple is a tropical plant with an edible fruit.
    It is the most economically significant plant in the family Bromeliaceae.The 
    pineapple is indigenous to South America.
    Pineapples grow as a small shrub, the individual flowers of the unpollinated plant
     fuse to form a multiple fruit. The plant is normally propagated from the offset produced
      at the top of the fruit,or from a side shoot, and typically matures within a year.</p>
  <a class="details-btn" href="">More Info</a>
</div>
  
*/