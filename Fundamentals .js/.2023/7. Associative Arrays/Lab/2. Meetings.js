function createMetingRegister(input) {
    let meetingRegister = {};
    input.forEach(element => {
        let [day, name] = element.split(' ');
        if(meetingRegister.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            meetingRegister[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    });
    for (let [day, name] of Object.entries(meetingRegister)) {
        console.log(day, '->' ,name);
    }
}

createMetingRegister(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']);
