function validate() {
    let input = document.getElementById('email');
    let emailPattern = /^[a-z]+@[a-z]+\.[a-z]+$/;
    input.addEventListener('change', onChange);

    function onChange(event) {
        let currentMail = event.target.value;
        if (!currentMail.match(emailPattern)){
            document.getElementById('email').classList.add('error');
        } else {
            document.getElementById('email').classList.remove('error');
        }
    }

}