function formNonDecreasingSubset(arr) {
    // let newArr = [arr[0]];
    // let biggestNum = arr[0];
    // for (let i = 1; i < arr.length; i++) {
    //     if (arr[i] >= biggestNum) {
    //         biggestNum = arr[i];
    //         newArr.push(arr[i]);
    //     }
    // }

    
    let result = arr.filter((a, i) => a >= Math.max(...arr.slice(0, i)));
     
    console.log(result.join(' '));
}

formNonDecreasingSubset([ 20, 3, 2, 15, 6]);
