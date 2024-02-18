window.addEventListener('load', solution);

function solution() {
  const employeeElement = document.getElementById('employee');
  const categoryElement = document.getElementById('category');
  const urgencyElement = document.getElementById('urgency');
  const teamElement = document.getElementById('team');
  const descriptionElement = document.getElementById('description');
  const addBtnElement = document.getElementById('add-btn');
  const previewListElement = document.querySelector('.preview-list');
  const pendingListElement = document.querySelector('.pending-list');
  const resolvedListElement = document.querySelector('.resolved-list');

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

    const employee = employeeElement.value;
    const category = categoryElement.value;
    const urgency = urgencyElement.value;
    const team = teamElement.value;
    const description = descriptionElement.value;

    if (!employee || !category || !urgency || !team || !description) {
      return;
    }

    const liElement = createElements('li');
    liElement.className = 'problem-content';

    const articleElement = createElements('article');
    articleElement.appendChild(createElements('p', `From: ${employee}`));
    articleElement.appendChild(createElements('p', `Category: ${category}`));
    articleElement.appendChild(createElements('p', `Urgency: ${urgency}`));
    articleElement.appendChild(createElements('p', `Assigned to: ${team}`));
    articleElement.appendChild(createElements('p', `Description: ${description}`));

    liElement.appendChild(articleElement);

    const editBtnElement = createElements('button', 'Edit');
    editBtnElement.className = 'edit-btn';
    editBtnElement.addEventListener('click', () => onEditBtnClick(employee, category, urgency, team, description));

    const continueBtnElement = createElements('button', 'Continue');
    continueBtnElement.className = 'continue-btn';
    continueBtnElement.addEventListener('click', () => onContinueBtnClick(employee, category, urgency, team, description));

    liElement.appendChild(editBtnElement);
    liElement.appendChild(continueBtnElement);

    previewListElement.appendChild(liElement);
    addBtnElement.parentElement.reset();
    addBtnElement.disabled = true;
  }

  function onEditBtnClick(employee, category, urgency, team, description) {
    employeeElement.value = employee;
    categoryElement.value = category;
    urgencyElement.value = urgency;
    teamElement.value = team;
    descriptionElement.value = description;

    previewListElement.textContent ='';
    addBtnElement.disabled = false;
  }

  function onContinueBtnClick(employee, category, urgency, team, description) {
    const liElement = createElements('li');
    liElement.className = 'problem-content';

    const articleElement = createElements('article');
    articleElement.appendChild(createElements('p', `From: ${employee}`));
    articleElement.appendChild(createElements('p', `Category: ${category}`));
    articleElement.appendChild(createElements('p', `Urgency: ${urgency}`));
    articleElement.appendChild(createElements('p', `Assigned to: ${team}`));
    articleElement.appendChild(createElements('p', `Description: ${description}`));

    liElement.appendChild(articleElement);

    const resolvedBtnElement = createElements('button', 'Resolved');
    resolvedBtnElement.className = 'resolve-btn';
    resolvedBtnElement.addEventListener('click', () => onResolvedBtnClick(employee, category, urgency, team, description));

    liElement.appendChild(resolvedBtnElement);

    pendingListElement.appendChild(liElement);
    previewListElement.textContent = '';
  }

  function onResolvedBtnClick(employee, category, urgency, team, description) {
    const liElement = createElements('li');
    liElement.className = 'problem-content';

    const articleElement = createElements('article');
    articleElement.appendChild(createElements('p', `From: ${employee}`));
    articleElement.appendChild(createElements('p', `Category: ${category}`));
    articleElement.appendChild(createElements('p', `Urgency: ${urgency}`));
    articleElement.appendChild(createElements('p', `Assigned to: ${team}`));
    articleElement.appendChild(createElements('p', `Description: ${description}`));

    liElement.appendChild(articleElement);

    const clearBtnElement = createElements('button', 'Clear');
    clearBtnElement.className = 'clear-btn';
    clearBtnElement.addEventListener('click', () => {
      addBtnElement.disabled = false;
      resolvedListElement.textContent = '';
    });

    liElement.appendChild(clearBtnElement);

    resolvedListElement.appendChild(liElement);
    pendingListElement.textContent = '';
  }
}




