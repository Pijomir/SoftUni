function solve() {
    let textInputRef = document.getElementById('task');
    let descriptionTextAreaRef = document.getElementById('description');
    let dateInputRef = document.getElementById('date');
    let [addTask, openTasks, inProgressTasks, completedTasks] = document.querySelectorAll('section');
    let addButn = document.getElementById('add');
    addButn.addEventListener('click', action);

    function action(event) {
        event.preventDefault();
        let textValue = textInputRef.value;
        let descriptionText = descriptionTextAreaRef.value;
        let dateValue = dateInputRef.value;
        if(!textValue || !descriptionText || !dateValue) {
            return;
        }

        let newArticle = document.createElement('article');
        let inner = `<h3>${textValue}</h3>` +
            `<p>${descriptionText}</p>` +
            `<p>${dateValue}</p>` +
            `<div class="flex">` +
            `<button class="green">Start</button>` +
            `<button class="red">Delete</button>` +
            `</div>`;
        newArticle.innerHTML = inner;
        
        openTasks.children[1].appendChild(newArticle);
        textInputRef.value = '';
        descriptionTextAreaRef.value = '';
        dateInputRef.value = '';
    }
}