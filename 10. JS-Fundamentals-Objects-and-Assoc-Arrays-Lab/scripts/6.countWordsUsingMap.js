function countWords(data) {
    let map = new Map();
    for(let entry of data) {
        let words = entry
            .split(/[^\w]+/g)
            .filter(el => el !== '')
            .map(word => word.toLowerCase());
        for(let word of words) {
            if (map.has(word)) {
                let count = map.get(word);
                map.set(word, ++count);
            } else {
                map.set(word, 1);
            }
        }
    }

    map = new Map([...map.entries()].sort());
    map.forEach((value, key) =>
        console.log(`'${key}' -> ${value} times`))
}

countWords(['JS devs use Node.js for server-side JS. JS devs use JS. -- JS for devs --']);