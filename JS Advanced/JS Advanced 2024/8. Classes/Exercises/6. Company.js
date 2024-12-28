class Company{
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        salary = Number(salary);
        if (!name || !salary || !position || !department || salary < 0) {
            throw new Error('Invalid input!');
        }

        if (!this.departments[department]) {
            this.departments[department] = {totalSalariesSum: 0, employees: []};
        }

        this.departments[department].employees.push({name, salary, position});
        this.departments[department].totalSalariesSum += salary;
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        for (let  deptInfo of Object.values(this.departments)) {
            deptInfo.totalSalariesSum = deptInfo.totalSalariesSum / deptInfo.employees.length;
        }

        let bestDepartment = Object.entries(this.departments).sort((a, b) => b[1].totalSalariesSum - a[1].totalSalariesSum).shift();
        let departmentPart = `Best Department is: ${bestDepartment[0]}\n`;
        let averageSalaryPart = `Average salary: ${(bestDepartment[1].totalSalariesSum).toFixed(2)}\n`;
        let employeesPart = bestDepartment[1].employees.sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name)).map(a => `${a.name} ${a.salary} ${a.position}`).join('\n');
        return departmentPart + averageSalaryPart + employeesPart;
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());