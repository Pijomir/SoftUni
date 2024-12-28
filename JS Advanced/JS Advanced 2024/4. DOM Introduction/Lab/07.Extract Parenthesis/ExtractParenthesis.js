function extract(content) {
    let text = document.getElementById('content').textContent;
    let pattern = /\([^)]+\)/g;
    let words = [];
    let matches = text.match(pattern);
    for (let match of matches) {
        words.push(match.slice(1, match.length - 1));
    }
    return words.join(', ');
}