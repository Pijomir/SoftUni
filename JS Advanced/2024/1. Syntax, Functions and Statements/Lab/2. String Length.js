function printLength(str1, str2, str3) {
    let totalLength = (str1 + str2 + str3).length;
    console.log(totalLength);
    console.log(Math.floor(totalLength / 3));
}

printLength('chocolate', 'ice cream', 'cake');