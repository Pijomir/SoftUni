const departButtonElement = document.getElementById('depart');
const arriveButtonElement = document.getElementById('arrive');
const infoElement = document.querySelector('#info span');

function solve() {
    let busStopName = '';
    let busStopId = 'depot'
    const url = 'http://localhost:3030/jsonstore/bus/schedule';
    async function depart() {
        try {
            const response = await fetch(`${url}/${busStopId}`);
            if (!response.ok) {
                const errorMessage = await response.json();
                throw errorMessage;
            }

            const data = await response.json();
            busStopId = data.next;
            busStopName = data.name;
            infoElement.textContent = `Next stop ${busStopName}`;
            departButtonElement.disabled = true;
            arriveButtonElement.disabled = false;
        } catch {
            infoElement.textContent = 'Error';
            departButtonElement.disabled = true;
            arriveButtonElement.disabled = true;
        }
    }

    async function arrive() {
        infoElement.textContent = `Arriving at ${busStopName}`;
        departButtonElement.disabled = false;
        arriveButtonElement.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();