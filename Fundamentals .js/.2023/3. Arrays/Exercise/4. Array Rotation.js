function rotateArray(arr, turns) {
    for (let i = 0; i < turns; i++){
        let currentEl = arr.shift();
        arr.push(currentEl)
    }

    console.log(arr.join(' '));
}

rotateArray([51, 47, 32, 61, 21], 2);
