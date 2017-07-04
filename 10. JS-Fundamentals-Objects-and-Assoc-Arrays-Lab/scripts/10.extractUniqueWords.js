function extractUniqueWords(sentences) {
    let uniqueWords = new Set();
    sentences
        .filter(sentence => sentence !== '')
        .forEach(sentence => sentence
            .match(/\b[A-Za-z\d_]+\b/g)
            .map(word => word.toLowerCase())
            .forEach(word => uniqueWords.add(word)));

    return [...uniqueWords.values()].join(', ');
}

