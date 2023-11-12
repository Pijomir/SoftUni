function createPassGenerator(input) {
    let [firstString, secondString, thirdString] = input;
    let primalPass = firstString + secondString;
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let chars = thirdString.split('');
    for (let char of primalPass) {
        if (vowels.includes(char)) {
            if (chars.length === 0) {
                chars = thirdString.split('');
            }

            let currentReplacement = chars.shift().toUpperCase();
            primalPass = primalPass.replace(char, currentReplacement);
        }
    }

    let finalPass = primalPass.split('').reverse().join('');
    console.log(`Your generated password is ${finalPass}`);
}

createPassGenerator(['ilovepizza', 'ihatevegetables', 'orange']);
