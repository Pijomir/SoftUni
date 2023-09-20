function detrmineIntegerOrFloat(n1, n2, n3) {
    let sum = n1 + n2 + n3;
    console.log(`${sum} - ${sum % 1 === 0 ? 'Integer' : 'Float'}`);
}

detrmineIntegerOrFloat(9, 100, 1.1);
