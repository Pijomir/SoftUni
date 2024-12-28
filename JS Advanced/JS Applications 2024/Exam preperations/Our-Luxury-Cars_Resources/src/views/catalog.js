import { html, render } from '../lib.js';
import { getAllCars } from '../data/carsData.js';

const catalogTemplate = (cars) => html`
<h3 class="heading">Our Cars</h3>
    <section id="dashboard">
        ${cars.length ? cars.map(carTemplate) : html`<h3 class="nothing">Nothing to see yet</h3>`}        
    </section>`;

const carTemplate = (car) => html`
<div class="car">
    <img src=${car.imageUrl} alt="example1" />
    <h3 class="model">${car.model}</h3>
    <div class="specs">
        <p class="price">${car.price}</p>
        <p class="weight">${car.weight}</p>
        <p class="top-speed">${car.speed}</p>
    </div>
    <a class="details-btn" href="/catalog/${car._id}">More Info</a>
</div>`;

export async function showCatalog(ctx) {
    const cars = await getAllCars();
    render(catalogTemplate(cars));
}


