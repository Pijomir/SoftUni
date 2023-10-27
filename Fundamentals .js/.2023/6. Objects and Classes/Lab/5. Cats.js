function createCatClass(input) {
    class Cat {
        constructor(name, age) {
            this.name = name,
            this.age = age
        }

        sayMeow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    while (input.length > 0) {
        let [name, age] = input.shift().split(' ');
        let currentCat = new Cat(name, age);
        currentCat.sayMeow();
    }
}


createCatClass(['Candy 1', 'Poppy 3', 'Nyx 2'])

