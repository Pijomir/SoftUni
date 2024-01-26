function deleteByEmail() {
    let inputMailRef = document.querySelector('[name="email"]');
    let rows = document.querySelectorAll('#customers tbody tr');
    let result = 'Not found.';
    for (let row of rows) {
        let currentMail = row.children[1].textContent;
        if (currentMail === inputMailRef.value) {
            row.remove();
            result = 'Deleted.';
        }
    }

    document.getElementById('result').textContent = result;
    inputMailRef.value = '';
}