import { html, render, page } from '../lib.js';
import { getUserData } from '../util.js';
import { getItemById, deleteItem } from '../data/itemsToSellData.js';

const detailsTemplate = (data, isOwner, onDelete) => html`
<section id="details">
    <div id="details-wrapper">
        <div>
            <img id="details-img" src=${data.imageUrl} alt="example1" />
            <p id="details-title">${data.item}</p>
        </div>
        <div id="info-wrapper">
            <div id="details-description">
                <p class="details-price">${data.price}</p>
                <p class="details-availability">${data.availability}</p>
                <p class="type">${data.type}</p>
                <p id="item-description">${data.description}</p>
            </div>
            ${isOwner ? html`
            <div id="action-buttons">
                <a href="/edit/${data._id}" id="edit-btn">Edit</a>
                <a href="javascript:void(0)" id="delete-btn" @click=${onDelete}>Delete</a>
            </div>` : null}
            
        </div>
    </div>
</section>`;

  export async function showDetails(ctx) {
    const id = ctx.params.id;
    const item = await getItemById(id);

    const user = getUserData();
    const isOwner = user?._id == item._ownerId;

    render (detailsTemplate(item, isOwner, onDelete));

    async function onDelete() {
        const choice = confirm('Delete?');

        if (choice) {
            await deleteItem(id);
            page.redirect('/catalog');
        }
    }
  }