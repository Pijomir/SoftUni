function sortArrayByTwoCriteria(arr) {
    return arr.sort((a, b) => a.length - b.length || a.localeCompare(b)).join('\n')
}

console.log(sortArrayByTwoCriteria(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']));