function replaceBlanksWithWords(input) {
    let sentence = input.shift().split(' ');
    let words = input.shift();
    sentence.forEach((word, index, arr) => {
        if (word.startsWith('_')) {
            let length = word.length;
            let punctuationMark = '';
            if (!word.endsWith('_')) {
                punctuationMark = word[word.length - 1];
                length = word.length - 1;
            }

            let neededWord = words.find(word => word.length === length);
            arr[index] = neededWord + punctuationMark;
        }
    });
    console.log(sentence.join(' '));
}

replaceBlanksWithWords(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.', ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]);
