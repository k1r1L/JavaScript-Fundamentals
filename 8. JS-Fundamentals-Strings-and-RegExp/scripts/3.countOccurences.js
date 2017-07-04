function countOccurrences(target, text) {
    let index = text.indexOf(target);
    let counter = 0;
    while (index > -1) {
        counter++;
        index = text.indexOf(target, index + 1);
    }

    return counter;
}