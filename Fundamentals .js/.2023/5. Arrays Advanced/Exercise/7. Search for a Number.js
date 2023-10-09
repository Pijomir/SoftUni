function searchForANumber(arr, commands) {
    let [elsToTake, elsToDelete, numToSearchFor] = commands;
    let newArr = arr.slice(0, elsToTake);
    newArr.splice(0, elsToDelete);
    let filteredArr = newArr.filter(a => a === numToSearchFor);
    console.log(`Number ${numToSearchFor} occurs ${filteredArr.length} times.`);
}

searchForANumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3]);