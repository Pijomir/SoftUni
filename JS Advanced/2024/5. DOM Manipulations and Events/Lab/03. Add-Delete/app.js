function addItem() {
    let inputRef = document.getElementById('newItemText');
    if (inputRef.value.length === 0) {
        return;
    }

    let newLiEl = document.createElement("li");
    newLiEl.textContent = inputRef.value;

    const deletBtn = document.createElement('a');
    deletBtn.textContent = '[Delete]';
    deletBtn.href = '#';
    deletBtn.addEventListener('click', onDelete);
    newLiEl.appendChild(deletBtn);

    
    document.getElementById('items').appendChild(newLiEl);
    inputRef.value = '';

    function onDelete(event) {
        let deletBtn = event.target;
        let liEl = deletBtn.parentElement;
        liEl.remove();
    }
}