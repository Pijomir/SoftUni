//async - await:

const list = document.getElementById('repos');

async function loadRepos() {
	const username = document.getElementById('username').value;
	const url = `https://api.github.com/users/${username}/repos`;

	try {
		const response = await fetch(url);
		if (!response.ok) {
			const errorMessage = await response.json();
			throw errorMessage;
		}

		const data = await response.json();
		list.replaceChildren(...data.map(createListItem));
	} catch (error) {
		list.textContent = error;
	}
	
	function createListItem({ html_url, full_name }) {
		const item = document.createElement('li');
		const anchor = document.createElement('a');
		anchor.href = html_url;
		anchor.textContent = full_name;
		item.appendChild(anchor);

		return item;
	}
}




//then-catch:

// const list = document.getElementById('repos');

// function loadRepos() {
// 	const username = document.getElementById('username').value;
// 	const url = `https://api.github.com/users/${username}/repos`;

// 	fetch(url)
// 		.then(onHeaders)
// 		.then(onSuccess)
// 		.catch(onError);

// 	function onHeaders(response) {
// 		if (!response.ok) {
// 			throw 'Error';
// 		}

// 		return response.json();
// 	}

// 	function onSuccess(data) {
// 		list.replaceChildren(...data.map(createListItem));
// 	}

// 	function onError(error) {
// 		list.textContent = error;
// 	}

// 	function createListItem({html_url, full_name}) {
// 		const item = document.createElement('li');
// 		const anchor = document.createElement('a');
// 		anchor.href = html_url;
// 		anchor.textContent = full_name;
// 		item.appendChild(anchor);

// 		return item;
// 	}
// }