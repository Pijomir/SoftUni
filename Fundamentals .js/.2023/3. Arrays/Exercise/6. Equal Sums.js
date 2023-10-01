function checkForEqualSums(arr) {
    // let result = 'no';
    // for (let i = 0; i < arr.length; i++) {
    //     let leftSideSum = arr.slice(0, i).reduce((a, b) => a + b, 0);
    //     let rightSideSUm = arr.slice(i + 1).reduce((a, b) => a + b, 0);
    //     if (leftSideSum === rightSideSUm) {
    //         result = i;
    //     } 
    // }

    // console.log((result));

    let result = 'no';
    for (let i = 0; i < arr.length; i++) {
        let leftSum = 0;
        let rightSum = 0;
        for (let j = 0; j < i; j++) {
            leftSum += arr[j];
        }

        for (let k = i + 1; k < arr.length; k++) {
            rightSum += arr[k];
        }

        if(leftSum === rightSum) {
            result = i;
            break;
        }
    }

    console.log(result);
}

checkForEqualSums([1, 2, 3, 3]);