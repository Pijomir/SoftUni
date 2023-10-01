// function compareTwoArrays(arr1, arr2) {
//     let comprasionResult = true;
//     let sum = 0;
//     let errorIndex = 0;
//     for (let i = 0; i < arr1.length; i++) {
//         if (arr1[i] !== arr2[i]) {
//             comprasionResult = false;
//             errorIndex = i;
//             break;
//         }

//         sum += Number(arr1[i]);
//     }

//     console.log(comprasionResult === true ? `Arrays are identical. Sum: ${sum}` : `Arrays are not identical. Found difference at ${errorIndex} index`);
// }

function compareTwoArrays(arr1, arr2) {
    let sum = 0;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            return;
        }

        sum += Number(arr1[i]);
    }

    console.log(`Arrays are identical. Sum: ${sum}`);
}

compareTwoArrays(['1','2','3','4','5'], ['1','2','4','4','5']);
