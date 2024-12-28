import { html, render, page } from '../lib.js';
import { getUserData } from '../util.js';
import { deleteChar, getCharById} from '../data/charData.js';

const detailsTemplate = (data, hasUser, isOwner, onDelete) => html`
<section id="details">
    <div id="details-wrapper">
        <img id="details-img" src=${data.imageUrl} alt="example1" />
        <div>
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
            </div>
            <h3>Is This Useful:<span id="likes">0</span></h3>
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
    const char = await getCharById(id);

    const user = getUserData();
    const hasUser = !!user;
    const isOwner = user?._id == char._ownerId;

    render (detailsTemplate(char, hasUser, isOwner, onDelete));

    async function onDelete() {
        const choice = confirm('Delete?');

        if (choice) {
            await deleteChar(id);
            page.redirect('/catalog');
        }
    }
  }