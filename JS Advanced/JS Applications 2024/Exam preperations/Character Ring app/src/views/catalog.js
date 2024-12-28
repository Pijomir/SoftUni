import { html, render } from '../lib.js';
import { getAllChars } from '../data/charData.js';

const catalogTemplate = (chars) => html`
<h2>Characters</h2>
    <section id="characters">
        ${chars.length ? chars.map(charTemplate): html`<h2>No added Heroes yet.</h2>`}
    </section>`;

const charTemplate = (char) => html`
<div class="character">
    <img src=${char.imageUrl} alt="example1" />
    <div class="hero-info">
        <h3 class="category">${char.category}</h3>
        <p class="description">
            ${char.description}
        </p>
        <a class="details-btn" href="/catalog/${char._id}">More Info</a>
    </div>
</div>`;


export async function showCatalog(ctx) {
    const chars = await getAllChars();
    render(catalogTemplate(chars));
}