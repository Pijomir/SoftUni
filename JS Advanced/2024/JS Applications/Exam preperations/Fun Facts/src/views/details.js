import { html, render, page } from '../lib.js';
import { getUserData } from '../util.js';
import { deleteFact, getFactById} from '../data/factsData.js';

const detailsTemplate = (data, hasUser, isOwner, onDelete) => html`
<section id="details">
    <div id="details-wrapper">
        <img id="details-img" src=${data.imageUrl} alt="example1" />
        <p id="details-category">${data.category}</p>
        <div id="info-wrapper">
            <div id="details-description">
                <p id="description">
                    ${data.description}
                </p>
                <p id ="more-info">
                    ${data.moreInfo}
                </p>
            </div>
            <h3>Likes:<span id="likes">0</span></h3>
            ${hasUser ? html`
            <div id="action-buttons">
                ${isOwner ? html`
                <a href="/edit/${data._id}" id="edit-btn">Edit</a>
                <a href="javascript:void(0)" id="delete-btn" @click=${onDelete}>Delete</a>` : html`
                <a href="/like" id="like-btn">Like</a>`}
            </div>` : null}
        </div>
    </div>
</section>`;

  export async function showDetails(ctx) {
    const id = ctx.params.id;
    const fact = await getFactById(id);

    const user = getUserData();
    const hasUser = !!user;
    const isOwner = user?._id == fact._ownerId;

    render (detailsTemplate(fact, hasUser, isOwner, onDelete));

    async function onDelete() {
        const choice = confirm('Delete?');

        if (choice) {
            await deleteFact(id);
            page.redirect('/catalog');
        }
    }
  }