function cutAndReverse(input) {
    let firstSTring = input.substring(0, input.length / 2).split('').reverse().join('');
    let secondString = input.substring(input.length / 2).split('').reverse().join('');
    console.log(`${firstSTring}\n${secondString}`);
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
