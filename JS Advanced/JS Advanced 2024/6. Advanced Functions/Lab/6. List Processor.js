function createListProcessor(input) {
    let innerCollection = [];
    let processor = {
        add: (str) => innerCollection.push(str),
        remove: (str) => innerCollection = innerCollection.filter(a => a !== str),
        print: () => console.log(innerCollection.join(','))
    }

    input.forEach(a => {
        let [command, str] = a.split(' ')
        processor[command](str);
    });
}

createListProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);