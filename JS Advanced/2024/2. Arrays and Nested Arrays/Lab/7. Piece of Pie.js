function getPartOfAnArray(arr, str1, str2) {
    const start = arr.indexOf(str1);
    const end = arr.indexOf(str2) + 1;
    return arr.slice(start, end);
}

console.log(getPartOfAnArray(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'));