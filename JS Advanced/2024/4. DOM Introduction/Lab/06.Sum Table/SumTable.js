function sumTable() {
    // let rows = document.querySelectorAll("td");
    // let tableRowsAsArr = Array.from(rows).slice(0, Array.from(rows).length - 2);
    
    // let result = 0;
    // for (let i = 1; i < tableRowsAsArr.length; i += 2) {
    //     result += Number(tableRowsAsArr[i].innerText);
    // }
    
    // document.getElementById("sum").innerText = result;
    let tdelements = document.querySelectorAll('tr td:nth-of-type(2)');
    let sum = Array.from(tdelements).reduce((a, b) => {
        let currentValue = Number(b.textContent) || 0;
        return a + currentValue;
    }, 0);

    document.getElementById('sum').textContent = sum;
}
