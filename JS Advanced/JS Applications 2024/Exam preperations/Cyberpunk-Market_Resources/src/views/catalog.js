import { html, render } from '../lib.js';
import { getAllItemsToSell } from '../data/itemsToSellData.js';

const catalogTemplate = (allItems) => html`
<h3 class="heading">Market</h3>
<section id="dashboard">
    ${allItems.length ? allItems.map(itemTemplate) : html`<h3 class="empty">No Items Yet</h3>`}        
</section>`;

const itemTemplate = (item) => html`
<div class="item">
    <img src=${item.imageUrl} alt="example1" />
    <h3 class="model">${item.item}</h3>
    <div class="item-info">
        <p class="price">${item.price}</p>
        <p class="availability">${item.availability}</p>
        <p class="type">${item.type}</p>
    </div>
    <a class="details-btn" href="/catalog/${item._id}">Uncover More</a>
</div>`;

export async function showCatalog(ctx) {
    const allItems = await getAllItemsToSell();
    render(catalogTemplate(allItems));
}