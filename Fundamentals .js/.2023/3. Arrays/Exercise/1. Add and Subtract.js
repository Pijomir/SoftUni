function changeArray(arr) {
    let originalSum = 0;
    let changedSum = 0;
    for (let i = 0; i < arr.length; i++) {
        originalSum += arr[i];
        let currentChangedNum = arr[i];
        arr[i] % 2 === 0 ? currentChangedNum += i : currentChangedNum -= i;
        arr[i] = currentChangedNum;
        changedSum += currentChangedNum;
    }

    console.log(arr);
    console.log(originalSum);
    console.log(changedSum);
}

changeArray([5, 15, 23, 56, 35]);
