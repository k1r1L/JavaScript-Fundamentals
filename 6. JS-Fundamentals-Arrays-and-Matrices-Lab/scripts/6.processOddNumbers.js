function processOddNumbers(arr) {
    let newArr = arr
        .filter((num, index) => index % 2 === 1)
        .map(el =>  el * 2)
        .reverse();

    return newArr.join(' ');
    newArr
}