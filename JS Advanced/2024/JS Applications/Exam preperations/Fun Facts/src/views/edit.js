import { getFactById, updateFact } from '../data/factsData.js';
import { html, render, page } from '../lib.js';
import { createSubmitHandler } from '../util.js';



const editTemplate = (fact, onEdit) => html`
<section id="edit">
    <div class="form">
      <h2>Edit Fact</h2>
      <form class="edit-form" @submit=${onEdit}>
        <input
        type="text"
        name="category"
        id="category"
        placeholder="Category"
        .value=${fact.category}
      />
      <input
        type="text"
        name="image-url"
        id="image-url"
        placeholder="Image URL"
        .value=${fact.imageUrl}
      />
      <textarea
      id="description"
      name="description"
      placeholder="Description"
      rows="10"
      cols="50"
      .value=${fact.description}
    ></textarea>
    <textarea
      id="additional-info"
      name="additional-info"
      placeholder="Additional Info"
      rows="10"
      cols="50"
      .value=${fact.moreInfo}
    ></textarea>
        <button type="submit">Post</button>
      </form>
    </div>
  </section>
`;

export async function showEdit(ctx) {
  const id = ctx.params.id;
  const fact = await getFactById(id);

  render(editTemplate(fact, createSubmitHandler(onEdit)));

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
    
    await updateFact(id, updatedData);
    page.redirect('/catalog/' + id);
  }
}