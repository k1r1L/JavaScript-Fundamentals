function splitWithDelimiter(string, delimiter) {
    let splitedElements = string.split(delimiter);
    for(let i = 0; i < splitedElements.length; i++) {
        console.log(splitedElements[i]);
    }
}

(string, delimeter) => string.split(delimeter).forEach(el => console.log(el)); // with arrow function