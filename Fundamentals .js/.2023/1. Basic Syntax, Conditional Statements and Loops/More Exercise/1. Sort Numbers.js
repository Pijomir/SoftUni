function sortThreeNumbers(n1, n2, n3) {
    let sortedNumbers = [n1, n2, n3].sort((a, b) => b - a);
    sortedNumbers.forEach(el => console.log(el)); 
}

sortThreeNumbers(2, 1, 3);
