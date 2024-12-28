function sortArray(arr) {
    return arr.sort((a, b) => a.localeCompare(b)).map((el, idx) => el = `${idx + 1}.${el}`).join('\n');
}

console.log(sortArray(["John", "Bob", "Christina", "Ema"]));