function validate() {
    const inputRef = document.getElementById('email');
    inputRef.addEventListener('change', onChange);

    function onChange(event) {
        let input = event.target.value;
        let validMailPatten = /^[a-z]+@[a-z]+\.[a-z]+$/;
        if (validMailPatten.test(input)) {
            event.target.classList.remove('error');
        } else {
            event.target.classList.add('error');
        }
    }
}