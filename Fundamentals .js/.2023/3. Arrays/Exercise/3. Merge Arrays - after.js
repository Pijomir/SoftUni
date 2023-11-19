function mergeArrays(arr1, arr2) {
    let mergedArr = [];
    arr1.forEach((el, i) => i % 2 === 0 ? mergedArr.push(Number(el) + Number(arr2[i])) : mergedArr.push(el + arr2[i]));
    console.log(mergedArr.join(' - '));
}

mergeArrays(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']);
