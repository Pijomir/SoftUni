function sumFirstLast(input) {
    let first = input.length === 0 ? 0 : Number(input.shift());
    let last = input.length === 0 ? 0 : Number(input.pop());
    return first + last;
}

console.log(sumFirstLast(['20', '30', '40']));