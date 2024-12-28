function printEveryNthElement(arr, num) {
    // let result = [];
    // for (let i = 0; i < arr.length; i += num) {
    //     result.push(arr[i]);
    // }

    // return result;

    return arr.filter((el, idx) => idx % num === 0);
}

console.log(printEveryNthElement(['5', 
'20', 
'31', 
'4', 
'20'], 
2));