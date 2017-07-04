function extractLinks(arr) {
    let pattern = /www\.[A-Za-z\d\-]+(\.[a-z]+)+/g;
    let links = [];
    for(let sentence of arr) {
        let match = pattern.exec(sentence);
        while (match) {
            links.push(match[0]);
            match = pattern.exec(sentence);
        }
    }
    return links.join('\n');
}