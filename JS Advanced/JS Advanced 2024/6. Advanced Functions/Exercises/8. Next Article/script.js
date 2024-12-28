function getArticleGenerator(articles) {
    let contentRef = document.getElementById('content');

    return () => {
        if (articles.length === 0) {
            return;
        }

        let currentArticle = document.createElement('article');
        currentArticle.textContent = articles.shift();
        contentRef.appendChild(currentArticle)
    }
}

