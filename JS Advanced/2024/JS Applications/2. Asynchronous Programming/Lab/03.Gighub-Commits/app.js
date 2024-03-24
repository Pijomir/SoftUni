const listElement = document.getElementById('commits');

function loadCommits() {
    const usernameElement = document.getElementById('username').value;
    const repoElement = document.getElementById('repo').value;
    const url = `https://api.github.com/repos/${usernameElement}/${repoElement}/commits`;

    fetch(url)
        .then(onHeaders)
        .then(onSuccess)
        .catch(onError);
}

function onHeaders(response) {
    if (!response.ok) {
        throw 'Error';
    }

    return response.json();
}

function onSuccess(data){
    listElement.replaceChildren(...data.map(createListItem));
}

function onError(error) {
    listElement.innerHTML = `<li>Error: 404 Not Found</li>`; 
}

function createListItem({commit: {author: {name}, message}}) {
    const item = document.createElement('li');
    item.textContent = `${name}: ${message}`;

    return item;
}