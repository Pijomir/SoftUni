function logIn(input) {
    let user = input.shift();
    let pass = user
        .split('')
        .reverse()
        .join('');
    let tries = 0;
    while (input.length > 0) {
        let currentTry = input.shift();
        tries++;

        console.log(currentTry === pass ? `User ${user} logged in.`
            : tries === 4 ? `User ${user} blocked!`
                : 'Incorrect password. Try again.');
    }
}

logIn(['Acer', 'login', 'go', 'let me in', 'recA'])