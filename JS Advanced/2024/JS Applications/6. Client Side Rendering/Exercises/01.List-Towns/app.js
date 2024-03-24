import { html, render } from './node_modules/lit-html/lit-html.js';

const root = document.getElementById('root');
document.querySelector('form').addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    let formData = new FormData(e.target);
    let townsList = formData.get('towns').split(', ');
    render(createTemplate(townsList), root);
}

function createTemplate(data) {
    return html`
        <ul>
            ${data.map(town => html`<li>${town}</li>`)}
        </ul>`;
}

