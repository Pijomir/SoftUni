function addItem() {
    let newLiEl = document.createElement("li");
    let inputRef = document.getElementById('newItemText');
    let currentInput = inputRef.value;
    if (currentInput.length === 0) {
        return;
    }

    newLiEl.textContent = currentInput;
    document.getElementById('items').appendChild(newLiEl);
    inputRef.value = '';
}