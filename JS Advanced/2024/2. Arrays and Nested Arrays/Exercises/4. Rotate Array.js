function rotateArray(arr, num) {
    for (let i = 0; i < num; i++) {
        let currentEl = arr.pop();
        arr.unshift(currentEl);
    }

    return arr.join(' ')
}

console.log(rotateArray(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15));