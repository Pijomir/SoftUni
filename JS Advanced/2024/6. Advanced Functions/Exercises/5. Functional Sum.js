function addToSum(initialSum) {
    let sum = initialSum || 0;

    function add(num) {
        sum += num;
        return add;
    }

    add.toString = function () {
        return sum;
    };

    return add;
}

let result = addToSum(1);
console.log(result.toString());