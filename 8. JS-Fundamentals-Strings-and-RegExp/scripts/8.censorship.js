function censorArticle(text, censoredWords) {
    for(let word of censoredWords) {
        let replace = '-'.repeat(word.length);
        while (text.indexOf(word) > -1) {
            text = text.replace(word, replace);
        }
    }

    return text;
}