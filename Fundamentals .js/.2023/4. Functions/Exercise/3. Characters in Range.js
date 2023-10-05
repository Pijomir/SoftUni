function findCharactersInRange (char1, char2) {
    let firstCode = char1.charCodeAt(0);
    let secondCode = char2.charCodeAt(0);
    let start = Math.min(firstCode, secondCode) + 1;
    let end = Math.max(firstCode, secondCode);
    let result = [];
    for (let i = start; i < end; i++) {
        result.push(String.fromCharCode(i));
    }

    console.log(result.join(' '));
} 

findCharactersInRange('a', 'd'); 