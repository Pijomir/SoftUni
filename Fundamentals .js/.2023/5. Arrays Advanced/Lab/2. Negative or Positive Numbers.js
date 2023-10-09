function createNewArr(arr) {
    let newArr = [];
    arr.forEach(el => el < 0 ? newArr.unshift(el) : newArr.push(el));
    console.log(newArr.join('\n'));
}

createNewArr(['3', '-2', '0', '-1']);
