function countWords(data) {
    let obj = {};
    for(let entry of data) {
        let words = entry
            .split(/[^\w]+/g)
            .filter(el => el !== '');
        for(let word of words) {
            if (obj.hasOwnProperty(word)) {
                obj[word]++;
            } else {
                obj[word] = 1;
            }
        }
    }

    return JSON.stringify(obj);
}