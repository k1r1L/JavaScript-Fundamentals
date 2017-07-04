function modify(num) {
    let numAsStr = num.toString();
    let sum = sumDigits(numAsStr);
    while(sum / numAsStr.length <= 5) {
        numAsStr += '9';
        sum = sumDigits(numAsStr);
    }

    return numAsStr;

    function sumDigits(num) {
        let sum = 0;
        for(let el of num) {
            sum += Number(el);
        }

        return sum;
    }
}