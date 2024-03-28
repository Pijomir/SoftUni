import { html, render } from '../lib.js';
import { getAllFruits } from '../data/fruitsData.js';

const catalogTemplate = (fruits) => html`
<h2>Fruits</h2>
<section id="dashboard">
    ${fruits.length ? fruits.map(fruitTemplate) : html`<h2>No fruit info yet.</h2>`}
</section>`;

const fruitTemplate = (fruit) => html`
<div class="fruit">
    <img src=${fruit.imageUrl} alt="example1" />
    <h3 class="title">${fruit.name}</h3>
    <p class="description">${fruit.description}</p>
    <a class="details-btn" href="/catalog/${fruit._id}">More Info</a>
</div>`;

export async function showCatalog(ctx) {
    const fruits = await getAllFruits();
    render(catalogTemplate(fruits));
}


