function findMaxSequence(arr) {
    let maxSequence = [];
    for(let i = 0; i < arr.length; i++) {
        let currentMaxSequence = [arr[i]]; 
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                currentMaxSequence.push(arr[j]);
            } else {
                break;
            }
        }

        if (currentMaxSequence.length > maxSequence.length) {
            maxSequence = currentMaxSequence;
        }
    }

    console.log(maxSequence.join(' '));
}

findMaxSequence([0, 1, 1, 5, 2, 2, 6, 3, 3]);
