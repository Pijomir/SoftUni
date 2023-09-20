    function matchTwoStrings(string1, char, string2) {
        let newString = string1.replace('_', char);
        console.log(newString === string2 ? 'Matched' : 'Not Matched');
}

matchTwoStrings('Str_ng', 'I', 'Strong');
