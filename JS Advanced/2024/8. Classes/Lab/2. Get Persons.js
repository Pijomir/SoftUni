function returnPersonObjects() {
    class Person {
        constructor(fName, lName, age, email) {
            this.firstName = fName;
            this.lastName = lName;
            this.age = age;
            this.email = email;
        }
    
        toString() {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
        }
    }
    
    let anna = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
    let softUni = new Person('SoftUni');
    let stephan = new Person('Stephan', 'Johnson', 25);
    let gabriel = new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com');

    return [anna, softUni, stephan, gabriel];
}

console.log(returnPersonObjects());