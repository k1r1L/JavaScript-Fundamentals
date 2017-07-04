function printArrayWithDelimiter(arr) {
    let del = arr.pop();
    return arr.join(del);
}