window.addEventListener('load', solve);

function solve() {
    let firstNameElement = document.getElementById('first-name');
    let lastNameElement = document.getElementById('last-name');
    let peopleCountElement = document.getElementById('people-count');
    let fromDateElement = document.getElementById('from-date');
    let daysCountElement = document.getElementById('days-count');
    let nextButtonElement = document.getElementById('next-btn');
    let ticketInfoList = document.querySelector('.ticket-info-list');
    let confirmTicketList = document.querySelector('.confirm-ticket');

    nextButtonElement.addEventListener('click', onNextBtnClick);

    function createElements(typeOfEl, content) {
        if (!content) {
            return document.createElement(typeOfEl);
        } else {
            let element = document.createElement(typeOfEl);
            element.textContent = content;
            return element;
        }
    }

    function onNextBtnClick(e) {
        e.preventDefault();
        let firstName = firstNameElement.value;
        let lastName = lastNameElement.value;
        let peopleCount = Number(peopleCountElement.value);
        let fromDate = fromDateElement.value;
        let daysCount = Number(daysCountElement.value);
        if (!firstName || !lastName || !peopleCount || !fromDate || !daysCount) {
            return;
        }

        let liElement = createElements('li');
        liElement.className = 'ticket';
        let articleElement = createElements('article');
        articleElement.appendChild(createElements('h3', `Name: ${firstName} ${lastName}`));
        articleElement.appendChild(createElements('p', `From date: ${fromDate}`));
        articleElement.appendChild(createElements('p', `For ${daysCount} days`));
        articleElement.appendChild(createElements('p', `For ${peopleCount} people`));
        liElement.appendChild(articleElement);

        let editButtonElement = createElements('button', 'Edit');
        editButtonElement.className = 'edit-btn';
        editButtonElement.addEventListener('click', () => onEditBtnClick(firstName, lastName, peopleCount, fromDate, daysCount));

        let continueButtonElement = createElements('button', 'Continue');
        continueButtonElement.className = 'continue-btn';
        continueButtonElement.addEventListener('click', () => onContinueBtnClick(firstName, lastName, peopleCount, fromDate, daysCount));

        liElement.appendChild(editButtonElement);
        liElement.appendChild(continueButtonElement);

        ticketInfoList.appendChild(liElement);

        nextButtonElement.parentElement.reset();
        nextButtonElement.disabled = true;
    }

    function onEditBtnClick(firstName, lastName, peopleCount, fromDate, daysCount) {
        firstNameElement.value = firstName;
        lastNameElement.value = lastName;
        peopleCountElement.value = peopleCount;
        fromDateElement.value = fromDate;
        daysCountElement.value = daysCount;

        ticketInfoList.textContent = '';
        nextButtonElement.disabled = false;
    }

    function onContinueBtnClick(firstName, lastName, peopleCount, fromDate, daysCount) {
        let liElement = createElements('li');
        liElement.className = 'ticket';
        let articleElement = createElements('article');
        articleElement.appendChild(createElements('h3', `Name: ${firstName} ${lastName}`));
        articleElement.appendChild(createElements('p', `From date: ${fromDate}`));
        articleElement.appendChild(createElements('p', `For ${daysCount} days`));
        articleElement.appendChild(createElements('p', `For ${peopleCount} people`));
        liElement.appendChild(articleElement);

        let confirmButtonElement = createElements('button', 'Confirm');
        confirmButtonElement.className = 'confirm-btn';
        confirmButtonElement.addEventListener('click', onConfirmBtnClick);

        let cancelButtonElement = createElements('button', 'Cancel');
        cancelButtonElement.className = 'cancel-btn';
        cancelButtonElement.addEventListener('click', onCancelBtnClick);

        liElement.appendChild(confirmButtonElement);
        liElement.appendChild(cancelButtonElement);

        confirmTicketList.appendChild(liElement);

        ticketInfoList.textContent = '';
    }

    function onConfirmBtnClick() {
        document.getElementById('main').remove();

        let h1Element = document.createElement('h1');
        h1Element.id = 'thank-you';
        h1Element.textContent = 'Thank you, have a nice day!';

        let backButtonElement = document.createElement('button');
        backButtonElement.id = 'back-btn';
        backButtonElement.textContent = 'Back';
        backButtonElement.addEventListener('click', () => {
            location.reload()
        });

        document.getElementById('body').appendChild(h1Element);
        document.getElementById('body').appendChild(backButtonElement);
    }

    function onCancelBtnClick() {
        confirmTicketList.textContent = '';
        nextButtonElement.disabled = false;
    }
}




