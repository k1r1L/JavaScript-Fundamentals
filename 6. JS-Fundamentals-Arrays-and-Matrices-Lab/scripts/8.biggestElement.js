function biggestElementInMatrix(matrix) {
    let biggestNum = Number.NEGATIVE_INFINITY;
    matrix.forEach(rol => rol
        .forEach(el => biggestNum = Math.max(biggestNum, el)))

    return biggestNum;
}

console.log(biggestElementInMatrix([[20, 50, 10],
    [8, 33, 145]]
));

console.log(biggestElementInMatrix([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
));