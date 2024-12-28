import { html, render } from '../lib.js';
import { getAllFacts } from '../data/factsData.js';

const catalogTemplate = (facts) => html`
<h2>Fun Facts</h2>
<section id="dashboard">
    ${facts.length ? facts.map(factTemplate) : html`<h2>No Fun Facts yet.</h2>`}    
</section>`;

const factTemplate = (fact) => html`
<div class="fact">
    <img src=${fact.imageUrl} alt="example1" />
    <h3 class="category">${fact.category}</h3>
    <p class="description">
        ${fact.description}
    </p>
    <a class="details-btn" href="/catalog/${fact._id}">More Info</a>
</div>`;


export async function showCatalog(ctx) {
    const chars = await getAllFacts();
    render(catalogTemplate(chars));
}