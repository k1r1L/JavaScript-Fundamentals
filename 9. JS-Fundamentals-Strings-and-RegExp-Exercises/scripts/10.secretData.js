function encrypt(dataArr) {
    let namePattern = /\*[A-Z][A-Za-z]*\s|\t|\*[A-Z][A-Za-z]*$/g;
    let phonePattern = /\+[\d\-]{10}\s|\t|\+[\d\-]{10}$/g;
    let idPattern = /![A-Za-z\d]+\s|\t|![A-Za-z\d]+$/g;
    let basePattern = /_[A-Za-z\d]+\s|\t|_[A-Za-z\d]+$/g;
    let encryptedData = [];
    for(let line of dataArr) {
        let newSentence = matchAndReplace(line, namePattern);
        newSentence = matchAndReplace(newSentence, phonePattern);
        newSentence = matchAndReplace(newSentence, idPattern);
        newSentence = matchAndReplace(newSentence, basePattern);
        encryptedData.push(newSentence);
    }

    return encryptedData.join('\n');
    function matchAndReplace(line, pattern) {
        let match = pattern.exec(line);
        while (match){
            let length = match[0].length;
            if (match[0].endsWith(' ')) {
                line = line.replace(match[0], '|'.repeat(length - 1) + ' ');
            } else {
                line = line.replace(match[0], '|'.repeat(length));
            }
            match = pattern.exec(line);
        }

        return line;
    }
}