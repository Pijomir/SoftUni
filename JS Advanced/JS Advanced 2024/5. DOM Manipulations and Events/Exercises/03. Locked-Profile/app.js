function lockedProfile() {
    let allButtons = Array.from(document.querySelectorAll('button'));
    allButtons.forEach(x => x.addEventListener('click', onClick));
    function onClick(event) {
        let hiddenInfo = event.currentTarget.parentElement.querySelector('div');
        let currentRadioBtn = event.target.parentElement.querySelector('input[type="radio"]:checked');
        if (currentRadioBtn.value === 'unlock') {
            if (event.currentTarget.textContent === 'Show more') {
                event.currentTarget.textContent = 'Hide it';
                hiddenInfo.style.display = 'block';
            } else {
                event.currentTarget.textContent = 'Show more';
                hiddenInfo.style.display = 'none'
            }
        }
    }
}