function attachEventsListeners() {
    let allButtons = Array.from(document.querySelectorAll('input[type="button"]'));
    for (let button of allButtons) {
        button.addEventListener('click', convert);

        function convert(event) {
            let currenUnitInput = button.parentElement.children[1];
            let value = Number(currenUnitInput.value);
            let unit = currenUnitInput.id;

            switch(unit) {
                case 'days': spreadNewValue(value); break;
                case 'hours': spreadNewValue(value / 24); break;
                case 'minutes': spreadNewValue(value / 24 / 60); break;
                case 'seconds': spreadNewValue(value / 24 / 60 / 60); break;
            }
        }

        function spreadNewValue(days) {
            let inputs = document.querySelectorAll('input[type="text"]');
            inputs[0].value = days;
            inputs[1].value = days * 24;
            inputs[2].value = days * 24 * 60;
            inputs[3].value = days * 24 * 60 * 60;
        }
    }
}