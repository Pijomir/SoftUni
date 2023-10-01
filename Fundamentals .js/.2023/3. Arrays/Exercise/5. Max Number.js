function findTopInteger(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let isTop = true;
        for (let j = i + 1; j < arr.length;j++) {
            if (arr[i] <= arr[j]) {
                isTop = false;
            }
        }

        if(isTop === true) {
            result.push(arr[i]);
        }
    } 

    console.log(result.join(' '));
}

findTopInteger([14, 24, 3, 19, 15, 17]);

function takeallTopIntegers(arr) {
    let topIntegers = [];
    while (arr.length > 0) {
        let currentNum = arr.shift();
        if (currentNum > Math.max(...arr)) {
            topIntegers.push(currentNum);
        }
    }

    console.log(topIntegers.join(' '));
}

takeallTopIntegers([41, 41, 34, 20]);