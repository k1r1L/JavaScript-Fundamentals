function captureTheNumbers(arr) {
    let pattern = /\d+/g;
    let match;
    let numbers = [];
    for(let text of arr) {
        while (match = pattern.exec(text)) {
            numbers.push(match);
        }
    }

    return numbers.join(' ');
}