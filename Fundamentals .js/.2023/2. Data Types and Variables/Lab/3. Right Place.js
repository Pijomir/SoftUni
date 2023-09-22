function matchTwoStrings(string1, char, string2) {
    let newString = string1.replace('_', char);
    console.log(newString === string2 ? 'Matched' : 'Not Matched');

    // let newString = '';
    // for (let i = 0; i < string1.length; i++) {
    //     string1[i] === '_' ? newString += char : newString += string1[i];
    // }

    // console.log(newString === string2 ? 'Matched' : 'Not Matched');
}

matchTwoStrings('Str_ng', 'I', 'Strong');
