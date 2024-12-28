function toggle() {
    let buttonRef = document.querySelector('#accordion div span');
    let buttonStatus = document.querySelector('#accordion div span').textContent;
    if (buttonStatus === "More") {
        document.getElementById('extra').style.display = 'block';
        buttonRef.textContent = 'Less';
    } else {
        document.getElementById('extra').style.display = 'none';
        buttonRef.textContent = 'More';
    }
}