function printTypeAndValues(input) {
    console.log(typeof input);
    console.log(typeof input === 'string' || typeof input === 'number' ? input : 'Parameter is not suitable for printing');
}

printTypeAndValues(null)