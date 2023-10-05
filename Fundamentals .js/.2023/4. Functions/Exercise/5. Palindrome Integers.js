function checkIfPalindromeOrNot(arr) {
    arr.forEach(num => console.log(num === Number(num.toString().split('').reverse().join('')) ? true : false)); 
}

checkIfPalindromeOrNot([123,323,421,121]);