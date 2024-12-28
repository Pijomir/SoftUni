function getdate(year, month, day) {
    let date = new Date(year, month - 1, day);
    date.setDate(date.getDate() - 1);
    let theYear = date.getFullYear();
    let theMonth = date.getMonth() + 1;
    let theDay = date.getDate();
    console.log(theYear + '-' + theMonth + '-' + theDay);
}

getdate(2016, 9, 30);