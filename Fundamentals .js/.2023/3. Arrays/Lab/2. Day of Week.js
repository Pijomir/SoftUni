function printDayOfTheWeek(input) {
    let week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    console.log(input >= 1 && input <= 7 ? week[input - 1] : 'Invalid day!');
}

printDayOfTheWeek(3);