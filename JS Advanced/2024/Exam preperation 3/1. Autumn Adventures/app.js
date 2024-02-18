window.addEventListener('load', solve);

function solve() {
    const timeElement = document.getElementById('time');
    const dateElement = document.getElementById('date');
    const placeElement = document.getElementById('place');
    const eventNameElement = document.getElementById('event-name');
    const emailElement = document.getElementById('email');
    const addBtnElement = document.getElementById('add-btn');
    const lastCheckListElement = document.getElementById('check-list');
    const upcomingListElement = document.getElementById('upcoming-list');
    const finishedListElement = document.getElementById('finished-list');
    const clearBtnElement = document.getElementById('clear');

    clearBtnElement.addEventListener('click', () => {
        finishedListElement.textContent = '';
    });

    addBtnElement.addEventListener('click', onAddBtnClick);

    function createElements(typeOfEl, content) {
        if (!content) {
            return document.createElement(typeOfEl);
        } else {
            let element = document.createElement(typeOfEl);
            element.textContent = content;
            return element;
        }
    }

    function onAddBtnClick(e) {
        const time = timeElement.value;
        const date = dateElement.value;
        const place = placeElement.value;
        const eventName = eventNameElement.value;
        const email = emailElement.value;

        const liElement = createElements('li');
        liElement.className = 'event-content';

        const articleElement = createElements('article');
        articleElement.appendChild(createElements('p', `Begins: ${date} at: ${time}`));
        articleElement.appendChild(createElements('p', `In: ${place}`));
        articleElement.appendChild(createElements('p', `Event: ${eventName}`));
        articleElement.appendChild(createElements('p', `Contact: ${email}`));

        liElement.appendChild(articleElement);

        const editBtnElement = createElements('button', 'Edit');
        editBtnElement.className = 'edit-btn';
        editBtnElement.addEventListener('click', () => onEditBtnClick(time, date, place, eventName, email));

        const continueBtnElement = createElements('button', 'Continue');
        continueBtnElement.className = 'continue-btn';
        continueBtnElement.addEventListener('click', () => onContinueBtnClick(time, date, place, eventName, email));

        liElement.appendChild(editBtnElement);
        liElement.appendChild(continueBtnElement);


        lastCheckListElement.appendChild(liElement);
        addBtnElement.parentElement.reset();
        addBtnElement.disabled = true;
    }

    function onEditBtnClick(time, date, place, eventName, email) {
        timeElement.value = time;
        dateElement.value = date;
        placeElement.value = place;
        eventNameElement.value = eventName;
        emailElement.value = email;

        lastCheckListElement.textContent = '';
        addBtnElement.disabled = false;
    }

    function onContinueBtnClick(time, date, place, eventName, email) {
        const liElement = createElements('li');
        liElement.className = 'event-content';

        const articleElement = createElements('article');
        articleElement.appendChild(createElements('p', `Begins: ${date} at: ${time}`));
        articleElement.appendChild(createElements('p', `In: ${place}`));
        articleElement.appendChild(createElements('p', `Event: ${eventName}`));
        articleElement.appendChild(createElements('p', `Contact: ${email}`));

        liElement.appendChild(articleElement);

        const finishButtonElement = createElements('button', 'Move to Finished');
        finishButtonElement.className = 'finished-btn';
        finishButtonElement.addEventListener('click', () => onFinishBtnClick(time, date, place, eventName, email));

        liElement.appendChild(finishButtonElement);

        upcomingListElement.appendChild(liElement);
        addBtnElement.disabled = false;
        lastCheckListElement.textContent = '';
    }

    function onFinishBtnClick(time, date, place, eventName, email) {
        const liElement = createElements('li');
        liElement.className = 'event-content';

        const articleElement = createElements('article');
        articleElement.appendChild(createElements('p', `Begins: ${date} at: ${time}`));
        articleElement.appendChild(createElements('p', `In: ${place}`));
        articleElement.appendChild(createElements('p', `Event: ${eventName}`));
        articleElement.appendChild(createElements('p', `Contact: ${email}`));

        liElement.appendChild(articleElement);

        finishedListElement.appendChild(liElement);
        upcomingListElement.textContent = '';
    }
}




