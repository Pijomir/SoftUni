function detectEmojis([input]) {
    let coolThreshold = input.match(/\d/g).map(Number).reduce((a, b) => a * b);
    let validEmojiPattern = /(:{2}|\*{2})[A-Z][a-z]{2,}\1/g;
    let validEmojis = input.match(validEmojiPattern);
    let validEmojisCount = validEmojis === null ? 0 : validEmojis.length;
    console.log(`Cool threshold: ${coolThreshold}`);
    console.log(`${validEmojisCount} emojis found in the text. The cool ones are:`);
    if (validEmojisCount > 0) {
        validEmojis.forEach(emoji => {
            let currentAsicsCodesSum = emoji.match(/[A-Za-z]/g).map(a => a = a.charCodeAt()).reduce((a, b) => a + b, 0);
            if (currentAsicsCodesSum > coolThreshold) {
                console.log(emoji);
            }
        });
    }
}

detectEmojis(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. :::::Mooning:: **Shy**"]);