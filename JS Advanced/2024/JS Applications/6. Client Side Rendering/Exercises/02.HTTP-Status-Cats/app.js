import { html, render } from './node_modules/lit-html/lit-html.js';
import { cats } from './catSeeder.js';

const root = document.getElementById('allCats');

render(createCatList(cats), root);

function createCatList(cats) {
    return html`
        <ul>
            ${cats.map(cat => createCat(cat))};
        </ul>`;
}

function createCat(cat) {
    return html`
    <li>
        <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
        <div class="info">
            <button @click=${toggleStatus} class="showBtn">Show status code</button>
            <div class="status" style="display: none" id="${cat.id}">
                <h4>Status Code: ${cat.statusCode}</h4>
                <p>${cat.statusMessage}</p>
            </div>
        </div>
    </li>`;
}

function toggleStatus(e) {
    const statusRef = e.target.parentElement.querySelector('div');
    const currentState = statusRef.style.display;
    
    if (currentState == 'none') {
        statusRef.style.display = 'block';
        e.target.textContent = 'Hide status code';
    } else {
        statusRef.style.display = 'none';
        e.target.textContent = 'Show status code';
    }
}