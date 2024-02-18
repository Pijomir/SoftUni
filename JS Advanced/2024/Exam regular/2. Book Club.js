class BookClub {
    constructor(library) {
        this.library = library;
        this.books = [];
        this.members = [];
    }

    addBook(title, author) {
        let currentBook = this.books.find(b => b.title === title);
        if(currentBook) {
            return `The book "${title}" by ${author} is already in ${this.library} library.`
        } else {
            this.books.push({title, author});
            return `The book "${title}" by ${author} has been added to ${this.library} library.`
        }
    }

    addMember (memberName) {
        if(this.members.includes(memberName)) {
            return `Member ${memberName} is already a part of the book club.`
        } else {
            this.members.push(memberName);
            return `Member ${memberName} has been joined to the book club.`
        }
    }

    assignBookToMember (memberName, bookTitle) {
        if(!this.members.includes(memberName)) {
            throw new Error(`Member ${memberName} not found.`);
        }

        let currentBook = this.books.find(b => b.title === bookTitle);
        if(!currentBook) {
            throw new Error(`Book "${bookTitle}" not found.`);
        } else {
            this.books = this.books.filter(b => b.title !== bookTitle);
            return `Member ${memberName} has been assigned the book "${currentBook.title}" by ${currentBook.author}.`;
        }
    }

    generateReadingReport () {
        if(this.members.length === 0) {
            return 'No members in the book club.';
        }

        if(this.books.length === 0) {
            return 'No available books in the library.';
        }

        const partOne = `Available Books in ${this.library} library:\n`;
        const partTwo = this.books.map(b => `"${b.title}" by ${b.author}`).join('\n');
        return partOne + partTwo;
    }
}