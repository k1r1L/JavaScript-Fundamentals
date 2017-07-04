function isMagical(input) {
    let matrix = input.map(e => e.split(' ').map(Number));
    let sum = matrix[0].reduce((a, b) => a + b);
    for(let row = 1; row < matrix.length; row++) {
        let currentSum = matrix[row].reduce((total, num) => total + num);
        if (currentSum !== sum) {
            return false;
        }
    }

    return true;
}

console.log(isMagical(['12 25 67'],
['40 40 24'],
'52 39 13'));