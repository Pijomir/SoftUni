function createListOfEmployees(input) {
    let list = {};
    for(let employee of input) {
        list[employee] = employee.length;
    }

    for (let [employeeName, employeeNum] of Object.entries(list)) {
        console.log(` Name: ${employeeName} -- Personal Number: ${employeeNum}`);
    }
}

createListOfEmployees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal']);
