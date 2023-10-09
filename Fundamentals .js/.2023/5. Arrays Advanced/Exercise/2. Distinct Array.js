function distinctArray(arr) {
    let result = arr.filter((el, i) => {
        return arr.indexOf(el) === i;
    });

    console.log(result.join(' '));
}

distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);