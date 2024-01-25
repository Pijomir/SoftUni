function sumTable() {
    let rows = document.querySelectorAll("td");
    let tableRowsAsArr = Array.from(rows).slice(0, Array.from(rows).length - 2);
    
    let result = 0;
    for (let i = 1; i < tableRowsAsArr.length; i += 2) {
        result += Number(tableRowsAsArr[i].innerText);
    }
    
    document.getElementById("sum").innerText = result;
}
