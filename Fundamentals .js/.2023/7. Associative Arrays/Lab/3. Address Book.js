function createAddressBook(input) {
    let addressBook = {};
    for (let el of input) {
        let [name, address] = el.split(':');
        addressBook[name] = address;
    }

    let entries = Object.entries(addressBook);
    let sortedEntries = entries.sort((a, b) => a[0].localeCompare(b[0]));
    sortedEntries.forEach(el => console.log(el[0], '->', el[1]));
}

createAddressBook(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd']);