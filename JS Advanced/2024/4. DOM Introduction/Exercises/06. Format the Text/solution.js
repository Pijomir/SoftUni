function solve() {
    let outputRef = document.getElementById("output");
    let text = document.getElementById("input").value;
    let sentences = text.split('.').filter(Boolean);
    
    while (sentences.length > 0) {
        let currentParagraph = sentences.splice(0, 3);
        outputRef.innerHTML += `<p>${currentParagraph.join('.')}.</p>`;
    }
}