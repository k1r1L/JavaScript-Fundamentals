function matchAllWords(text) {
    let regex = /\w+/g;
    let matches = text.match(regex);

    return matches.join('|');
}