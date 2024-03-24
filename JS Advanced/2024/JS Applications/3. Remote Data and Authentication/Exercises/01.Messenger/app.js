function attachEvents() {
    document.getElementById('submit').addEventListener('click', onClickSubmit);
    document.getElementById('refresh').addEventListener('click', onClickRefresh);

    const url = 'http://localhost:3030/jsonstore/messenger';

    async function onClickSubmit(e) {
        let nameRef = document.querySelector('[name="author"]');
        let textRef = document.querySelector('[name="content"]');
        let name = nameRef.value;
        let text = textRef.value;
        let postData = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({author: name, content: text})
        }

        await fetch(url, postData);
        nameRef.value = '';
        textRef.value = '';
    }

    async function onClickRefresh(e) {
        let messagesAreaRef = document.getElementById('messages');
        let response = await fetch(url);
        let data = await response.json();
        let savedMessages = Object.values(data).map(m => `${m.author}: ${m.content}`).join('\n');
        messagesAreaRef.value = savedMessages;
    }
}

attachEvents();