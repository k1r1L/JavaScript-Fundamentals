function findOccurrences(sentence, word) {
    let pattern = `\\b${word}\\b`;
    let regExp = new RegExp(pattern, 'gi');
    let match = regExp.exec(sentence);
    let occurrences = 0;
    while (match) {
        occurrences++;
        match = regExp.exec(sentence);
    }

    return occurrences;
}