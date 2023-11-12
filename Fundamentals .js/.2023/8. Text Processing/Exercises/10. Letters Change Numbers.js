function makeCalculations(input) {
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let strings = input.split(' ');
    let sum = 0;
    strings.forEach(string => {
        if (string.length > 0) {
            let params = string.split('');
            let firstLetter = params.shift();
            let firsLetterPosition = alphabet.indexOf(firstLetter.toLowerCase()) + 1;
            let lastLetter = params.pop();
            let lastLetterPosition = alphabet.indexOf(lastLetter.toLowerCase()) + 1;
            let theNumber = Number(params.join(''));
            firstLetter.toUpperCase() === firstLetter ? theNumber /= firsLetterPosition : theNumber *= firsLetterPosition;
            lastLetter.toUpperCase() === lastLetter ? theNumber -= lastLetterPosition : theNumber += lastLetterPosition;
            sum += theNumber;
        }
    });
    console.log(sum.toFixed(2));
}

makeCalculations('P34562Z q2576f  H456z');