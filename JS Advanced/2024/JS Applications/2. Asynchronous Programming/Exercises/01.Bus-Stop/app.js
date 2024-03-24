const stopIdElement = document.getElementById('stopId');
const stopNameElement = document.getElementById('stopName');
const bussesInfoELement = document.getElementById('buses');

async function getInfo() {
    const stopId = stopIdElement.value;
    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            const errorMessage = await response.json();
            throw errorMessage;
        }

        const data = await response.json();
        stopNameElement.textContent = data.name;
        bussesInfoELement.replaceChildren(...Object.entries(data.buses).map(line => createListItem(line[0], line[1])));
        stopIdElement.value = '';
    } catch {
        stopNameElement.textContent = 'Error';
        stopIdElement.value = '';
        bussesInfoELement.innerHTML = '';
    }

    function createListItem(busId, time) {
        const item = document.createElement('li');
        item.textContent = `Bus ${busId} arrives in ${time} minutes`;
        return item;
    }
}



// then-catch:
// function getInfo() {
//     const stopIdElement = document.getElementById('stopId');
//     const stopNameElement = document.getElementById('stopName');
//     const bussesInfoELement = document.getElementById('buses');
//     const stopId = stopIdElement.value;
//     const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;

//     fetch(url)
//         .then(onHeaders)
//         .then(onSuccess)
//         .catch(onError);

//     function onHeaders(response) {
//         if (!response.ok) {
//             throw 'Error';
//         }

//         return response.json();
//     }

//     function onSuccess(data) {
//         stopNameElement.textContent = data.name;
//         bussesInfoELement.replaceChildren(...Object.entries(data.buses).map(line => createListItem(line[0], line[1])));
//         stopIdElement.value = '';
//     }

//     function onError(error) {
//         stopNameElement.textContent = 'Error';
//     }

//     function createListItem(busId, time) {
//         const item = document.createElement('li');
//         item.textContent = `Bus ${busId} arrives in ${time} minutes`;
//         return item;
//     }
// }