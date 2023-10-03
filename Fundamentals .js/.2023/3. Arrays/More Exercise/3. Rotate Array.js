function rotateArray(arr) {
    let count = Number(arr.pop());
    while (count > 0) {
        let currentEl = arr.pop();
        arr.unshift(currentEl);
        count--;
    }

    console.log(arr.join(' '));
}

rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);
