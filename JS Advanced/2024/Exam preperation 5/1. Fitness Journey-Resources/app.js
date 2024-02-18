window.addEventListener('load', solve);

function solve() {
    const nameElement = document.getElementById('name');
    const emailElement = document.getElementById('email');
    const contactNumberElement = document.getElementById('contact-number');
    const classTypeElement = document.getElementById('class-type');
    const classTimeElement = document.getElementById('class-time');
    const nextBtnElement = document.getElementById('next-btn');
    const previewElement = document.querySelector('.class-info');
    const confirmClassElement = document.querySelector('.confirm-class');
    const mainDivElement = document.getElementById('main');
    const bodyElement = document.getElementById('body');

    nextBtnElement.addEventListener('click', onNextBtnClick);

    function createElements(typeOfEl, content) {
        if (!content) {
            return document.createElement(typeOfEl);
        } else {
            const element = document.createElement(typeOfEl);
            element.textContent = content;
            return element;
        }
    }

    function onNextBtnClick(e) {
        e.preventDefault();

        const name = nameElement.value;
        const email = emailElement.value;
        const contactNumber = contactNumberElement.value;
        const classType = classTypeElement.value;
        const classTime = classTimeElement.value;

        if (!name || !email || !contactNumber || !classType || !classTime) {
            return;
        }

        const liElement = createElements('li');
        liElement.className = 'info-item';

        const articleElement = createElements('article');
        articleElement.appendChild(createElements('p', `${name}`));
        articleElement.appendChild(createElements('p', `${email}`));
        articleElement.appendChild(createElements('p', `${contactNumber}`));
        articleElement.appendChild(createElements('p', `${classType}`));
        articleElement.appendChild(createElements('p', `${classTime}`));

        liElement.appendChild(articleElement);

        const editBtnElement = createElements('button', 'Edit');
        editBtnElement.className = 'edit-btn';
        editBtnElement.addEventListener('click', () => onEditBtnClick(name, email, contactNumber, classType, classTime));

        const continueBtnElement = createElements('button', 'Continue');
        continueBtnElement.className = 'continue-btn';
        continueBtnElement.addEventListener('click', () => onContinueBtnClick(name, email, contactNumber, classType, classTime));

        liElement.appendChild(editBtnElement);
        liElement.appendChild(continueBtnElement);

        previewElement.appendChild(liElement);
        nextBtnElement.parentElement.reset();
        nextBtnElement.disabled = true;
    }

    function onEditBtnClick(name, email, contactNumber, classType, classTime) {
        nameElement.value = name;
        emailElement.value = email;
        contactNumberElement.value = contactNumber;
        classTypeElement.value = classType;
        classTimeElement.value = classTime;
        previewElement.textContent = '';
        nextBtnElement.disabled = false;
    }

    function onContinueBtnClick(name, email, contactNumber, classType, classTime) {
        const liElement = createElements('li');
        liElement.className = 'info-item';

        const articleElement = createElements('article');
        articleElement.appendChild(createElements('p', `${name}`));
        articleElement.appendChild(createElements('p', `${email}`));
        articleElement.appendChild(createElements('p', `${contactNumber}`));
        articleElement.appendChild(createElements('p', `${classType}`));
        articleElement.appendChild(createElements('p', `${classTime}`));

        liElement.appendChild(articleElement);

        const cancelBtnElement = createElements('button', 'Cancel');
        cancelBtnElement.className = 'cancel-btn';
        cancelBtnElement.addEventListener('click', () => {
            confirmClassElement.textContent = '';
            nextBtnElement.disabled = false;
        });

        const confirmBtnElement = createElements('button', 'Confirm');
        confirmBtnElement.className = 'confirm-btn';
        confirmBtnElement.addEventListener('click', () => {
            mainDivElement.remove();
            const h1Element = createElements('h1', 'Thank you for scheduling your appointment, we look forward to seeing you!');
            h1Element.id = 'thank-you';
            const doneBtnElement = createElements('button', 'Done');
            doneBtnElement.id = 'done-btn';
            doneBtnElement.addEventListener('click', () => {
                location.reload();
            });

            bodyElement.appendChild(h1Element);
            bodyElement.appendChild(doneBtnElement);
        });

        liElement.appendChild(cancelBtnElement);
        liElement.appendChild(confirmBtnElement);

        confirmClassElement.appendChild(liElement);
        previewElement.textContent = '';
    }
}






