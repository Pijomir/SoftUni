function checkIfPalindromeOrNot(arr) {
    arr.forEach(num => console.log(num === Number(num.toString().split('').reverse().join('')) ? true : false)); 
}

checkIfPalindromeOrNot([123,323,421,121]);



// Илиян Джестанов - нинджа решение
// solve = num => console.log(num.map(x => String(x) == String(x).split('').reverse().join('')).join('\n'))