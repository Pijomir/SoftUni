// function reverseArray(count, arr) {
//     let newArr = [];
//     for (let i = 0; i < count; i++) {
//         newArr[i] = arr[count - 1 - i];
//     }

//     console.log(newArr.join(' '));
// }

// reverseArray(3, [10, 20, 30, 40, 50]);

function reverseArray(count, arr) {
    let result = arr.slice(0, count).reverse().join(' ');
    console.log(result);
}

reverseArray(3, [10, 20, 30, 40, 50]);