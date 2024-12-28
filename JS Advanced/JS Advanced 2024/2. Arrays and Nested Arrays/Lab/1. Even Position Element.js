function findElementsOnEvenIndexes(input) {
    return input.filter((a, i) => i % 2 === 0).join(' ');
}

console.log(findElementsOnEvenIndexes(['20', '30', '40', '50', '60']));
