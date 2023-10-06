function createPasswordValidator(password) {
    if (isProperLength(password) && isThereOnlyLettersOrDigits(password) && isThereTwoDigits(password)) {
        console.log('Password is valid');
    }

    if (!isProperLength(password)) {
        console.log('Password must be between 6 and 10 characters');
    }

    if (!isThereOnlyLettersOrDigits(password)) {
        console.log('Password must consist only of letters and digits');
    }

    if (!isThereTwoDigits(password)) {
        console.log('Password must have at least 2 digits');
    }

    function isProperLength(pass) {
        if (pass.length >= 6 && pass.length <= 10) {
            return true;
        }
    }

    function isThereTwoDigits (pass) {
        let countOfDigits = 0;
        for (let char of pass) {
            if (!isNaN(+char)) {
                countOfDigits++;
            }
        }

        return countOfDigits >= 2 ? true : false;
    }

    function isThereOnlyLettersOrDigits(pass) {
        let result = true;
        for (let char of pass) {
            let currentCode = char.charCodeAt();
            if (!((currentCode > 47 && currentCode < 58) || (currentCode > 64 && currentCode < 91) || (currentCode > 96 && currentCode < 123))) {
                result = false;
                break;
            }
        }

        return result;
    }
}

createPasswordValidator('MyPass123');
