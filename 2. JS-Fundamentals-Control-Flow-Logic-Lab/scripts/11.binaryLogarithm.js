function binaryLog(numArr) {
    let result = '';
    for(let el of numArr) {
        result += Math.log2(el) + '\n';
    }

    return result;
}

console.log(binaryLog([3, 2, 1]));