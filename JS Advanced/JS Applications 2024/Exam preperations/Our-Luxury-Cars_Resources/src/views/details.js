import { html, render, page } from '../lib.js';
import { getUserData } from '../util.js';
import { deleteCar, getCarById} from '../data/carsData.js';

const detailsTemplate = (data, isOwner, onDelete) => html`
<section id="details">
    <div id="details-wrapper">
        <img id="details-img" src=${data.imageUrl} alt="example1" />
        <p id="details-title">${data.model}</p>
        <div id="info-wrapper">
            <div id="details-description">
                <p class="price">${data.price}</p>
                <p class="weight">${data.weight}</p>
                <p class="top-speed">${data.speed}</p>
                <p id="car-description">
                    ${data.about}
                </p>
            </div>
        <!--Edit and Delete are only for creator-->
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
    const car = await getCarById(id);

    const user = getUserData();
    const isOwner = user?._id == car._ownerId;

    render (detailsTemplate(car, isOwner, onDelete));

    async function onDelete() {
        const choice = confirm('Delete?');

        if (choice) {
            await deleteCar(id);
            page.redirect('/catalog');
        }
    }
  }