window.addEventListener('load', solve);

function solve() {

    const input = {
        firstName: document.getElementById('first-name'),
        lastName: document.getElementById('last-name'),
        dateIn: document.getElementById('date-in'),
        dateOut: document.getElementById('date-out'),
        peopleCount: document.getElementById('people-count')
    }

    const nextButton = document.getElementById('next-btn');
    nextButton.addEventListener('click', nextBtnClick);

    const infoList = document.querySelector('.info-list');
    const confirmList = document.querySelector('.confirm-list');
    const output = document.getElementById('verification');

    function nextBtnClick(event) {
        event.preventDefault();
        
        let firstName = input.firstName.value;
        let lastName = input.lastName.value;
        let dateIn = input.dateIn.value;
        let dateOut = input.dateOut.value;
        let peopleCount = Number(input.peopleCount.value);

        if(!firstName || !lastName || !dateIn || !dateOut || !peopleCount) {
            return;
        }

        if ((new Date(dateIn)).getDate() >= (new Date(dateOut)).getDate()) {
            return;
        }

        nextButton.parentElement.reset();
        nextButton.disabled = true;

        const result = createReservationInfo(firstName, lastName, dateIn, dateOut, peopleCount);

        infoList.appendChild(result);
    }

    function createArticleInfo(firstName, lastName, dateIn, dateOut, peopleCount) {
        const liElement = elementCreator('li');
        liElement.className = 'reservation-content';

        const articleElement = elementCreator('article');
        articleElement.appendChild(elementCreator('h3', `Name: ${firstName} ${lastName}`));
        articleElement.appendChild(elementCreator('p', `From date: ${dateIn}`));
        articleElement.appendChild(elementCreator('p', `To date: ${dateOut}`));
        articleElement.appendChild(elementCreator('p', `For ${peopleCount} people`));

        liElement.appendChild(articleElement);

        return liElement;
    }

    function createReservationInfo(firstName, lastName, dateIn, dateOut, peopleCount) {
        const element = createArticleInfo(firstName, lastName, dateIn, dateOut, peopleCount);
    
        const editButton = elementCreator('button', 'Edit');
        editButton.className = 'edit-btn';
        editButton.addEventListener('click', () => clickEditBtn(firstName, lastName, dateIn, dateOut, peopleCount));
        const continueButton = elementCreator('button', 'Continue');
        continueButton.className = 'continue-btn';
        continueButton.addEventListener('click', clickContinueBtn.bind(null, firstName, lastName, dateIn, dateOut, peopleCount));

        element.appendChild(editButton);
        element.appendChild(continueButton);

        return element;
    }

    function createConfirmReservation(firstName, lastName, dateIn, dateOut, peopleCount) {
        const element = createArticleInfo(firstName, lastName, dateIn, dateOut, peopleCount);
    
        const confirmButton = elementCreator('button', 'Confirm');
        confirmButton.className = 'confirm-btn';
        confirmButton.addEventListener('click', clickConfirmOrCancelBtns.bind(null, true));
        const cancelButton = elementCreator('button', 'Cancel');
        cancelButton.className = 'cancel-btn';
        cancelButton.addEventListener('click', clickConfirmOrCancelBtns.bind(null, false));

        element.appendChild(confirmButton);
        element.appendChild(cancelButton);

        return element;
    }

    function clickEditBtn(firstName, lastName, dateIn, dateOut, peopleCount) {
        input.firstName.value = firstName;
        input.lastName.value = lastName;
        input.dateIn.value = dateIn;
        input.dateOut.value = dateOut;
        input.peopleCount.value = peopleCount;

        infoList.textContent = '';
        nextButton.disabled = false;
    }

    function clickContinueBtn(firstName, lastName, dateIn, dateOut, peopleCount) {
        const result = createConfirmReservation(firstName, lastName, dateIn, dateOut, peopleCount);
        confirmList.appendChild(result);
        infoList.textContent = '';
    }

    function clickConfirmOrCancelBtns(confirmed) {
        const className = confirmed ? 'reservation-confirmed' : 'reservation-cancelled';
        const text = confirmed ? 'Confirmed.' : 'Cancelled.';
        output.className = className;
        output.textContent = text;
        nextButton.disabled = false;
        confirmList.textContent = '';
    }

    function elementCreator(type, content) {
        const element = document.createElement(type);

        if(content) {
            element.textContent = content;
        }

        return element;
    }
}





