import { searchMotor } from '../data/motoData.js';
import { html, render } from '../lib.js';
import { createSubmitHandler } from '../util.js';

const searchTemplate = (onSearch, result) => html`
<section id="search">
    <div class="form">
        <h4>Search</h4>
        <form class="search-form" @submit=${onSearch}>
            <input
                type="text"
                name="search"
                id="search-input"
            />
            <button class="button-list">Search</button>
        </form>
    </div>
    <h4 id="result-heading">Results:</h4>
    ${result ? showResultTemplate(result) : ''}
</section>`;

const showResultTemplate = (result) => html`
<div class="search-result">
    ${result.length ? result.map(x => html`
    <div class="motorcycle">
        <img src=${x.imageUrl} alt="example1" />
        <h3 class="model">${x.model}</h3>
        <a class="details-btn" href="/catalog/${x._id}">More Info</a>
    </div>`) : html`<h2 class="no-avaliable">No result.</h2>`}
</div>`;

export function showSearch() {
    render(searchTemplate(createSubmitHandler(onSearch)));
}

async function onSearch(data, form) {
    const {search} = data;
    if (!search) {
        return alert('No Query');
    }

    const result = await searchMotor(search); 
    render(searchTemplate(createSubmitHandler(onSearch), result));
}



