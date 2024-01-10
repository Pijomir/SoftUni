function showDayOfWeek(day) {
    let weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let result = weekDays.includes(day) ? weekDays.indexOf(day) + 1 : 'error';
    console.log(result);
}

showDayOfWeek('Monday');