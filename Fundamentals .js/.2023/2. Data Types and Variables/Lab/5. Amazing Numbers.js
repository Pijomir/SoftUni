function determineAmazingOrNot(num) {
    let sum = num.toString()
                    .split('')
                    .reduce((a, b) => +a + +b);
    console.log(`${num} Amazing? ${sum.toString().includes('9') ? 'True' : 'False'}`);
}

determineAmazingOrNot(1233);