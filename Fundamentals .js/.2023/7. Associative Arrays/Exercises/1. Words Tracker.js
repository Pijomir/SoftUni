function trackWords(words) {
    let wordsToTrack = words.shift().split(' ');
    let theWords = {};
    wordsToTrack.forEach(word => theWords[word] = 0);
    words.forEach(word => {
        if(theWords.hasOwnProperty(word)) {
            theWords[word]++;
        }
    });
    console.log(Object.entries(theWords).sort((a, b) => b[1] - a[1]).map(a => `${a[0]} - ${a[1]}`).join('\n'));
}

trackWords([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task']);