function solution() {
    let str = '';
    return {
        append: (a) => str += a,
        removeStart: (b) => str = str.slice(b),
        removeEnd: (c) => str = str.slice(0, str.length - c),
        print: () => console.log(str)
    }
}


let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
