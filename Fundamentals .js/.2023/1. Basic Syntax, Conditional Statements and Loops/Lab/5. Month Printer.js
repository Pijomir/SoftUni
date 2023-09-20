function printTheMonth(month) {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    console.log(month < 1 || month > 12 ? 'Error!' : months[month - 1]);
}

printTheMonth(2)