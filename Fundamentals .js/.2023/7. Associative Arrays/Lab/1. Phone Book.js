function createPhoneBook(input) {
    let phoneBook = {};
    input.forEach(a => {
        let [personName, phoneNumber] = a.split(' ');
        phoneBook[personName] = phoneNumber;
    });
    let phoneBookForPrint = Object.entries(phoneBook);
    phoneBookForPrint.forEach(a => {
        let [personName, phoneNumber] = a;
        console.log(personName, '->' , phoneNumber);
    });
}

createPhoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']);