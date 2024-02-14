function extractText() {
    // let result = [];
    // const list = document.getElementById('items');
    // const items = Array.from(list.children);
    // for (let item of items) {
    //     result.push(item.textContent);
    // }

    // const textarea = document.getElementById('result');
    // textarea.value = result.join('\n');

    const list = document.getElementById('items');
    const textarea = document.getElementById('result');
    const result = list.textContent;
    textarea.textContent = result;

}