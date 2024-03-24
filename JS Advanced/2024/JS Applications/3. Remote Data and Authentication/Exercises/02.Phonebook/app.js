function attachEvents() {
    const url = 'http://localhost:3030/jsonstore/phonebook';
    const phoneBookElementRef = document.getElementById('phonebook');
    document.getElementById('btnLoad').addEventListener('click', onLoadBtnClick);
    document.getElementById('btnCreate').addEventListener('click', onCreateBtnCLick);

    async function onCreateBtnCLick(e) {
        let personInputRef = document.getElementById('person');
        let phoneInputRef = document.getElementById('phone');

        let person = personInputRef.value;
        let phone = phoneInputRef.value;
        if (!person || !phone) {
            return;
        }

        let postData = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({person, phone})
        };
        await fetch(url, postData);
        personInputRef.value = '';
        phoneInputRef.value = '';
        onLoadBtnClick();
    }

    async function onLoadBtnClick(e) {
        let response = await fetch(url);
        let data = await response.json();
        phoneBookElementRef.innerHTML = '';
        Object.values(data).forEach(rec => createAndAppendLiElement(rec));
    }

    function createAndAppendLiElement(data) {
        let liElement = document.createElement('li');
        liElement.textContent = `${data.person}: ${data.phone}`;

        let deleteBtnElement = document.createElement('button');
        deleteBtnElement.textContent = 'Delete';
        deleteBtnElement.dataset.id = data._id;
        deleteBtnElement.addEventListener('click', onDeleteBtnClick);

        liElement.appendChild(deleteBtnElement);
        phoneBookElementRef.appendChild(liElement);
    }

    async function onDeleteBtnClick(e) {
        let id = e.target.dataset.id;
        await fetch(url + '/' + id, {method: 'DELETE'});
        onLoadBtnClick();
    }
}

attachEvents();