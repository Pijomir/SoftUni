function condenseArray(arr) {
    while (arr.length > 1) {
        let newArr = [];
        for(let i = 0; i < arr.length - 1; i++) {
            newArr[i] = arr[i] + arr[i + 1];
        }

        arr = newArr;
    }

    console.log(arr[0]);
}

condenseArray([5,0,4,1,2]);
