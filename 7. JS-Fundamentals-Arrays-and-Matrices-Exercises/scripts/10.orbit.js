function orbitMatrix(arr) {
    let [rows, cols, x, y] = arr;
    let matrix = [];
    for(let row = 0; row < rows; row++) {
        matrix.push('0'.repeat(cols).split('').map(Number));
    }

    let num = 1;
    matrix[x][y] = num;
    let curRow = x;
    let curCol = y;
    let counter = 1;

    while(!isFilled(matrix)) {
        num++;
        let startRow = Math.max(0, curRow - counter);
        let endRow = Math.min(matrix.length - 1, curRow + counter);
        let startCol = Math.max(0, curCol - counter);
        let endCol = Math.min(matrix[0].length - 1, curCol + counter);
        for(let row = startRow; row <= endRow; row++) {
            for(let col = startCol; col <= endCol; col++) {
                if (matrix[row][col] === 0) {
                    matrix[row][col] = num;
                }
            }
        }


        counter++;
    }

    for(let row = 0; row < matrix.length; row++) {
        console.log(matrix[row].join(' '))
    }

    function isFilled(matrix) {
        for(let row = 0; row < matrix.length; row++) {
            for(let col = 0; col < matrix[row].length; col++) {
                if (matrix[row][col] === 0) {
                    return false;
                }
            }
        }

        return true;
    }

}