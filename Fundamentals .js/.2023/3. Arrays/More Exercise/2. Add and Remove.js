function createNewArr(arr) {
    let newArr = [];
    for (let i = 1; i <= arr.length; i++) {
        arr[i - 1] === 'add' ? newArr.push(i) : newArr.pop();
    }

    console.log(newArr.length === 0 ? 'Empty' : newArr.join(' '));
}

createNewArr(['add', 'add', 'remove', 'add', 'add']);
