function sortAnArray(arr) {
    let newArr = [];
    let sortedArr = arr.sort((a, b) => b - a);
    while (sortedArr.length > 0) {
        newArr.push(sortedArr.shift());
        newArr.push(sortedArr.pop());
    }

    console.log(newArr.join(' '));
}

sortAnArray([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
