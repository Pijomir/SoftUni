function generateReport() {
    let checkBoxes = document.querySelectorAll('input[type="checkbox"]');
    let rows = document.querySelectorAll("tr");
    let output = document.getElementById("output");
    let selected = Array.from(checkBoxes)
        .map((a, b) => [a, b])
        .filter(x => x[0].checked)
        .map(x => [x[0].name, x[1]]);
    let rowData = Array.from(rows)
        .slice(1)
        .map(x => Array.from(x.children).map(y => y.innerHTML));
    output.value = JSON.stringify(rowData
        .map(x => selected.reduce((a, b) => {
            let [sColName, sColIndex] = b;
            a[sColName] = x[sColIndex];
            return a;
        }, {})));
}