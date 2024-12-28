function encodeAndDecodeMessages() {
    let inputRef = document.getElementById('main').children[0].querySelector('textarea');
    let outputRef = document.getElementById('main').children[1].querySelector('textarea');
    let inputBtn = document.getElementById('main').children[0].querySelector('button');
    let outputBtn = document.getElementById('main').children[1].querySelector('button');
    inputBtn.addEventListener('click', encode);
    outputBtn.addEventListener('click', decode);

    function encode(event) {
        let currentInput = inputRef.value.split('');
        currentInput = currentInput.map(a => {
            let char = a.charCodeAt();
            return String.fromCharCode(char + 1);
        });
        outputRef.value = currentInput.join('');
        inputRef.value = ''
    }

    function decode(event) {
        let currentOuput = outputRef.value.split('');
        currentOuput = currentOuput.map(b => {
            let char = b.charCodeAt();
            return String.fromCharCode(char - 1);
        });
        outputRef.value = currentOuput.join('');
    }    
}