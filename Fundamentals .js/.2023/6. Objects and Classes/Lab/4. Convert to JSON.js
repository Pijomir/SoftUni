function convertToJson(name, lastName, hairColor) {
    let personInfo = {name, lastName, hairColor};
    console.log(JSON.stringify(personInfo));
}

convertToJson('George', 'Jones', 'Brown');