function decideLowerOrUpper(char) {
    let result = char.toUpperCase() === char ? 'upper-case' : 'lower-case';
    console.log(result);
}

decideLowerOrUpper('l');
