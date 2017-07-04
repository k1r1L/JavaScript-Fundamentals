function matchDates(arr) {
    let dateRegex = /\b([\d]{1,2})-([A-Z][a-z]{2})-([\d]{4})\b/g;
    let dates = [];
    let match;
    for(let sentence of arr) {
        while (match = dateRegex.exec(sentence)) {
            dates.push(`${match[0]} (Day: ${match[1]}, Month: ${match[2]}, Year: ${match[3]})`);
        }
    }

    return dates.join('\n');
}