function extractText(text) {
    let openingIndex = text.indexOf('(');
    let closingIndex = text.indexOf(')');
    let results = [];
    while (openingIndex > -1 && closingIndex > -1 && openingIndex < closingIndex) {
        results.push(text.substring(openingIndex + 1, closingIndex));
        openingIndex = text.indexOf('(', openingIndex + 1);
        closingIndex = text.indexOf(')', closingIndex + 1);
    }

    return results.join(', ');
}