import { getCharById, updateChar } from '../data/charData.js';
import { html, render, page } from '../lib.js';
import { createSubmitHandler } from '../util.js';



const editTemplate = (char, onEdit) => html`
<section id="edit">
    <div class="form">
      <img class="border" src="./images/border.png" alt="">
      <h2>Edit Character</h2>
      <form class="edit-form" @submit=${onEdit}>
        <input
        type="text"
        name="category"
        id="category"
        placeholder="Character Type"
        .value=${char.category}
      />
      <input
        type="text"
        name="image-url"
        id="image-url"
        placeholder="Image URL"
        .value=${char.imageUrl}
        />
      <textarea
      id="description"
      name="description"
      placeholder="Description"
      rows="2"
      cols="10"
      .value=${char.description}

    ></textarea>
    <textarea
      id="additional-info"
      name="additional-info"
      placeholder="Additional Info"
      rows="2"
      cols="10"
      .value=${char.moreInfo}
    ></textarea>
        <button type="submit">Edit</button>
      </form>
      <img class="border" src="./images/border.png" alt="">
    </div>
  </section>`;

export async function showEdit(ctx) {
  const id = ctx.params.id;
  const char = await getCharById(id);

  render(editTemplate(char, createSubmitHandler(onEdit)));

  async function onEdit(data, form) {
    if (!data.category || !data['image-url'] || !data.description || !data['additional-info']) {
      return alert('All fields are required in order to update a character');
    }

    let updatedData = {
      category: data.category,
      imageUrl: data['image-url'],
      description: data.description,
      moreInfo: data['additional-info']
    };
    
    await updateChar(id, updatedData);
    page.redirect('/catalog/' + id);
  }
}