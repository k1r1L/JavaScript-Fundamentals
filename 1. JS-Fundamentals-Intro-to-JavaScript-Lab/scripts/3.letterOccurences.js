function letterOccurences(string, letter) {
    let count = 0;
    for(let el of string) {
        if(el == letter) {
            count++;
        }
    }

    console.log(count);
}

letterOccurences(['hello', 'l']);
letterOccurences(['panther', 'n']);