const url = 'http://localhost:3030/jsonstore/collections/books';
const tableElementRef = document.querySelector('tbody');
const formElementRef = document.querySelector('form');
const loadBtnElement = document.getElementById('loadBooks');
loadBtnElement.addEventListener('click', loadAllBooks);
formElementRef.addEventListener('submit', addNewBook);

async function loadAllBooks(e) {
    try {
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error(err.message);
        }

        let data = await response.json();
        let tableData = Object.entries(data).map(el => createTableElements(el[0], el[1]));
        tableElementRef.replaceChildren(...tableData);
    } catch (err) {
        alert(err.message);
    }
}

async function addNewBook(e) {
    e.preventDefault();
    let formData = new FormData(e.target);
    let title = formData.get('title');
    let author = formData.get('author');

    await fetch(url, {
        method: 'POST',
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({title, author})
    });
    loadAllBooks();
    formElementRef.reset();
}

function createTableElements(id, data) {
    let trElement = document.createElement('tr');

    let tdTitleElement = document.createElement('td');
    tdTitleElement.textContent = data.title;
    trElement.appendChild(tdTitleElement);

    let tdAuthorElelement = document.createElement('td');
    tdAuthorElelement.textContent = data.author;
    trElement.appendChild(tdAuthorElelement);

    let tdBtnsElement = document.createElement('td');

    let editBtnElement = document.createElement('button');
    editBtnElement.textContent = 'Edit';
    editBtnElement.dataset.id = id;
    editBtnElement.addEventListener('click', onEditBtnClick);

    let deleteBtnElement = document.createElement('button');
    deleteBtnElement.textContent = 'Delete';
    deleteBtnElement.dataset.id = id;
    deleteBtnElement.addEventListener('click', onDeleteBtnClick);

    tdBtnsElement.appendChild(editBtnElement);
    tdBtnsElement.appendChild(deleteBtnElement);
    trElement.appendChild(tdBtnsElement);

    return trElement;
}

async function onEditBtnClick(e) {
    let id = e.target.dataset.id;
    let target = e.target;
    let response = await fetch(url + '/' + id);
    let data = await response.json();
    formElementRef.children[0].textContent = "Edit FORM";
    formElementRef.children[5].remove();
    formElementRef.children[2].value = data.title;
    formElementRef.children[4].value = data.author;
    let saveBtn = document.createElement("button");
    saveBtn.textContent = "Save";
    formElementRef.appendChild(saveBtn);
    formElementRef.removeEventListener("submit", addNewBook);
    formElementRef.addEventListener("submit", async (event) => {
        event.preventDefault();
        let formData = new FormData(formElementRef);
        let title = formData.get("title");
        let author = formData.get("author");
        await fetch(url + "/" + id, {
            method: "put",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({ title, author }),
        });
        formElementRef.children[0].textContent = "FORM";
        formElementRef.children[5].remove();
        let submitBtn = document.createElement("button");
        submitBtn.textContent = "Submit";
        formElementRef.appendChild(submitBtn);
        target.parentElement.parentElement.children[0].textContent = title;
        target.parentElement.parentElement.children[1].textContent = author;
        formElementRef.addEventListener("submit", addNewBook);
        formElementRef.reset();
    });
}

async function onDeleteBtnClick(e) {
    let id = e.target.dataset.id;
    await fetch(url + "/" + id, { method: "delete" });
    e.target.parentElement.parentElement.remove();
}

