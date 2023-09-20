function determineAge(age) {
    let personByAge =
        age > 65 ? 'elder' :
            age > 19 ? 'adult' :
                age > 13 ? 'teenager' :
                    age > 2 ? 'child' :
                        age >= 0 ? 'baby' :
                            'out of bounds';
    console.log(personByAge);
}

determineAge(20);