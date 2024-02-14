function deleteByEmail() {
    // let inputMailRef = document.querySelector('[name="email"]');
    // let rows = document.querySelectorAll('#customers tbody tr');
    // let result = 'Not found.';
    // for (let row of rows) {
    //     let currentMail = row.children[1].textContent;
    //     if (currentMail === inputMailRef.value) {
    //         row.remove();
    //         result = 'Deleted.';
    //     }
    // }

    // document.getElementById('result').textContent = result;
    // inputMailRef.value = '';

    let inputMailRef = document.querySelector('[name="email"]');
    let rows = document.querySelectorAll('tr td:nth-of-type(2)');
    let result = 'Not found.';
    
    let rowElements = Array.from(rows);
    let targetElement = rowElements.find(a => a.textContent === inputMailRef.value);

    if(targetElement) {
        targetElement.parentElement.remove();
        result = 'Deleted.';
    }
    
    document.getElementById('result').textContent = result;
    inputMailRef.value = '';
}