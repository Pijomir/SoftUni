function determineIfLeapYear (year) {
    let result = year % 400 === 0 || year % 100 !== 0 && year % 4 === 0 ? 'yes' : 'no';
    console.log(result);
}

determineIfLeapYear(2003);