function showNumberOfDaysInMonth(month, year) {
    let currentDate = new Date(year, month);
    currentDate.setDate(0);
    console.log(currentDate.getDate()); 
}

showNumberOfDaysInMonth(1, 2012);