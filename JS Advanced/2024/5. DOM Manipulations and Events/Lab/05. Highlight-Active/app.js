function focused() {
    let allDivs = document.querySelectorAll('div > div');
    for (let currentDiv of allDivs) {
        currentDiv.children[1].addEventListener('focus', onFocus);
        currentDiv.children[1].addEventListener('blur', onBlur)
    }

    function onFocus(event) {
        let divArea = event.target.parentElement;
        divArea.classList.add('focused');
    }

    function onBlur(event) {
        let divArea = event.target.parentElement;
        divArea.classList.remove('focused');
    }
}