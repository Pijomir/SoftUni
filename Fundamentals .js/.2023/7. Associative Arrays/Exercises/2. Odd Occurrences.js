function printOddOccurancesOfWords(input) {
    let strings = input.toLowerCase().split(' ');
    let countOfStrings = {};
    strings.forEach(string => countOfStrings.hasOwnProperty(string) ? countOfStrings[string]++ : countOfStrings[string] = 1);
    let filteredStrings = Object.entries(countOfStrings).filter(a => a[1] % 2 !== 0).map(a => a = a[0]);
    console.log(filteredStrings.join(' '));
}

printOddOccurancesOfWords('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
