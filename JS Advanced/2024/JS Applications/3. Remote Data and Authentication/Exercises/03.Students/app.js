const url = 'http://localhost:3030/jsonstore/collections/students';
const formElementRef = document.getElementById('form');
const tbodyElemnetRef = document.querySelector('tbody');
formElementRef.addEventListener('submit', createStudents);
window.addEventListener('load', createTable);

async function createStudents(e) {
    e.preventDefault();
    let formData = new FormData(e.target);
    let firstName = formData.get('firstName');
    let lastName = formData.get('lastName');
    let facultyNumber = formData.get('facultyNumber');
    let grade = formData.get('grade');
    if (!firstName || !lastName || !facultyNumber || !grade) {
        return;
    }

    await fetch(url, {
        method: 'POST',
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ firstName, lastName, facultyNumber, grade })
    });
    formElementRef.reset();
    tbodyElemnetRef.innerHTML = '';
    createTable();
}

async function createTable() {
    let response = await fetch(url);
    let data = await response.json();
    Object.values(data).forEach(s => {
        createTrAndTds(s);
    });
}

function createTrAndTds(data) {
    let trElement = document.createElement('tr');
    let firstNameTdEl = document.createElement('td');
    firstNameTdEl.textContent = data.firstName;
    let lastNameTdEl = document.createElement('td');
    lastNameTdEl.textContent = data.lastName;
    let facultyNumberTdEl = document.createElement('td');
    facultyNumberTdEl.textContent = data.facultyNumber;
    let gradeTdEl = document.createElement('td');
    gradeTdEl.textContent = data.grade;
    trElement.appendChild(firstNameTdEl);
    trElement.appendChild(lastNameTdEl);
    trElement.appendChild(facultyNumberTdEl);
    trElement.appendChild(gradeTdEl);
    tbodyElemnetRef.appendChild(trElement);
}
