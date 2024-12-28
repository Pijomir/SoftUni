import { createChar } from '../data/charData.js';
import { render, html, page } from '../lib.js';
import { createSubmitHandler } from '../util.js';


const createTemplate = (onCreate) => html`
<section id="create">
    <div class="form">
      <img class="border" src="./images/border.png" alt="">
      <h2>Add Character</h2>
      <form class="create-form" @submit=${onCreate}>
        <input
          type="text"
          name="category"
          id="category"
          placeholder="Character Type"
        />
        <input
          type="text"
          name="image-url"
          id="image-url"
          placeholder="Image URL"
        />
        <textarea
        id="description"
        name="description"
        placeholder="Description"
        rows="2"
        cols="10"
      ></textarea>
      <textarea
        id="additional-info"
        name="additional-info"
        placeholder="Additional Info"
        rows="2"
        cols="10"
      ></textarea>
        <button type="submit">Add Character</button>
      </form>
      <img class="border" src="./images/border.png" alt="">
    </div>
  </section>`;

  export function showCreate(ctx) {
    render(createTemplate(createSubmitHandler(onCreate)));
  }

  async function onCreate(data, form) {
    if (!data.category || !data['image-url'] || !data.description || !data['additional-info']) {
        return alert('All fields are required in order to create a character');
    }

    await createChar(data.category, data['image-url'], data.description, data['additional-info']);
    page.redirect('/catalog');
  }