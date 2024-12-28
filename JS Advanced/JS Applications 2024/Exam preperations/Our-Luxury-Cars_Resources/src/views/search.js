import { searchCar } from '../data/carsData.js';
import { html, render } from '../lib.js';
import { createSubmitHandler } from '../util.js';

const searchTemplate = (onSearch, result) => html`
<section id="search">
    <div class="form">
      <h4>Search</h4>
      <form class="search-form" @submit=${onSearch}>
        <input type="text" name="search" id="search-input" />
        <button class="button-list">Search</button>
      </form>
    </div>
    <div class="search-result">
      ${result ? showResultTemplate(result) : html`<h2 class="no-avaliable">No result.</h2>`}}
    </div>
  </section>`;

const showResultTemplate = (result) => html`
${result.length ? result.map(x => html`
<div class="car">
  <img src=${x.imageUrl} alt="example1"/>
  <h3 class="model">${x.model}</h3>
  <a class="details-btn" href="/catalog/${x._id}">More Info</a>
</div>`) : html`<h2 class="no-avaliable">No result.</h2>`}`;

export function showSearch() {
  render(searchTemplate(createSubmitHandler(onSearch)))
}

async function onSearch(data, form) {
  const {search} = data;
  if (!search) {
    return alert('No Query');
  }

  const result = await searchCar(search);
  render(searchTemplate(createSubmitHandler(onSearch), result));
}