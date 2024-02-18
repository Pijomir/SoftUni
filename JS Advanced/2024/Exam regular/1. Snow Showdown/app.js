window.addEventListener("load", solve);

function solve() {
  const nameElement = document.getElementById('snowman-name');
  const heightElement = document.getElementById('snowman-height');
  const locationElement = document.getElementById('location');
  const creatorElement = document.getElementById('creator-name');
  const specialAtributeElement = document.getElementById('special-attribute');
  const addBtnElement = document.querySelector('.add-btn');
  const previewList = document.querySelector('.snowman-preview');
  const snowList = document.querySelector('.snow-list');
  const mainElelemnt = document.getElementById('hero');
  const imageElement = document.getElementById('back-img');
  const bodyElement = document.querySelector('.body');

  addBtnElement.addEventListener('click', onAddBtnClick);

  function createElements(typeOfEl, content) {
    if (!content) {
      return document.createElement(typeOfEl);
    } else {
      const element = document.createElement(typeOfEl);
      element.textContent = content;
      return element;
    }
  }

  function onAddBtnClick(e) {
    e.preventDefault();

    const name = nameElement.value;
    const height = heightElement.value;
    const location = locationElement.value;
    const creator = creatorElement.value;
    const specialAtribute = specialAtributeElement.value;

    if (!name || !height || !location || !creator || !specialAtribute) {
      return;
    }

    const liElement = createElements('li');
    liElement.className = 'snowman-info';

    const articleElement = createElements('article');
    articleElement.appendChild(createElements('p', `Name: ${name}`));
    articleElement.appendChild(createElements('p', `Height: ${height}`));
    articleElement.appendChild(createElements('p', `Location: ${location}`));
    articleElement.appendChild(createElements('p', `Creator: ${creator}`));
    articleElement.appendChild(createElements('p', `Attribute: ${specialAtribute}`));

    const btnDivElement = createElements('div');
    btnDivElement.className = 'btn-container';

    const editBtnElement = createElements('button', 'Edit');
    editBtnElement.className = 'edit-btn';
    editBtnElement.addEventListener('click', () => onEditBtnClick(name, height, location, creator, specialAtribute));

    const nextBtnElement = createElements('button', 'Next');
    nextBtnElement.className = 'next-btn';
    nextBtnElement.addEventListener('click', () => onNextBtnClick(name, height, location, creator, specialAtribute));

    btnDivElement.appendChild(editBtnElement);
    btnDivElement.appendChild(nextBtnElement);

    liElement.appendChild(articleElement);
    liElement.appendChild(btnDivElement);

    previewList.appendChild(liElement);
    addBtnElement.parentElement.reset();
    addBtnElement.disabled = true;
  }

  function onEditBtnClick(name, height, location, creator, specialAtribute) {
    nameElement.value = name;
    heightElement.value = height;
    locationElement.value = location;
    creatorElement.value = creator;
    specialAtributeElement.value = specialAtribute;
    previewList.textContent = '';
    addBtnElement.disabled = false;
  }

  function onNextBtnClick(name, height, location, creator, specialAtribute) {
    const liElement = createElements('li');
    liElement.className = 'snowman-content';

    const articleElement = createElements('article');
    articleElement.appendChild(createElements('p', `Name: ${name}`));
    articleElement.appendChild(createElements('p', `Height: ${height}`));
    articleElement.appendChild(createElements('p', `Location: ${location}`));
    articleElement.appendChild(createElements('p', `Creator: ${creator}`));
    articleElement.appendChild(createElements('p', `Attribute: ${specialAtribute}`));
    
    const sendBtnElement = (createElements('button', 'Send'));
    sendBtnElement.className = 'send-btn';
    sendBtnElement.addEventListener('click', onSendBtnClick);

    articleElement.appendChild(sendBtnElement);
    liElement.appendChild(articleElement);

    snowList.appendChild(liElement);
    previewList.textContent = '';
  }

  function onSendBtnClick(e) {
    mainElelemnt.remove();
    imageElement.hidden = false;
    const backBtnElement = createElements('button', 'Back');
    backBtnElement.className = 'back-btn';
    backBtnElement.addEventListener('click', () => {
      location.reload();
    });

    bodyElement.appendChild(backBtnElement);
  }
}