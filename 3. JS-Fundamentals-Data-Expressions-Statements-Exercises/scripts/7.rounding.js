function roundNum(numArr) {
    let [num, precision] = numArr;
    if(precision > 15) {
        precision = 15;
    }

    let denominator = Math.pow(10, precision);
    let newNum = Math.round(num * denominator) / denominator;
    console.log(newNum)
}