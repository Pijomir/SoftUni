function extractEmails(input) {
    let mailPattern = /(?<=\s)[a-z0-9]+[\.\-_]?[a-z0-9]+@[a-z]+\-?[a-z]+(\.[a-z+\-?]+)+/gi;
    let validMails = input.match(mailPattern);
    validMails.forEach(mail => console.log(mail));
}

extractEmails('Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.');