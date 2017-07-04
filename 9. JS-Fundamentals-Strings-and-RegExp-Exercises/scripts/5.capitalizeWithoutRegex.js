function capitalize([text]) {
    let words = text.split(' ');
    let result = [];
    for(let word of words) {
        let newWord = word[0].toUpperCase();
        newWord += word.substring(1).toLowerCase();
        result.push(newWord);
    }

    return result.join(' ');
}