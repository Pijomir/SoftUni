function extractFile(input) {
    let file = input.split('\\').pop().split('.');
    let extension = file.pop();
    let fileName = file.join('.');
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);
}

extractFile('C:\\Internal\\training-internal\\Template.pptx');