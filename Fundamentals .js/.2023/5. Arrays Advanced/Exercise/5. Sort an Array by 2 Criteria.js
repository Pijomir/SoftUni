function sortAnArrayByTwoCriteria(arr) {
    let sortedArr = arr.sort((a, b) =>{
        if (a.length === b.length) {
            return a.localeCompare(b);
        }

        return a.length - b.length;
    });

    console.log(sortedArr.join('\n'));
}

sortAnArrayByTwoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
