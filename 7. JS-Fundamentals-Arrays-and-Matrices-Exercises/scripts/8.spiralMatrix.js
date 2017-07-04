function spiralMatrix(rows, cols) {
    let matrix = [];
    for (let i = 0; i < rows; i++) {
        matrix.push('0'.repeat(cols).split('').map(Number));
    }

    let num = 1;
    let rowLength = matrix.length;
    let colLength = matrix[0].length;
    fillMatrix(0, 0);
    printMatrix(matrix);

    function fillMatrix(startRow, startCol) {
        if (matrix[startRow][startCol] !== 0) {
            return;
        }

        // fill Top
        for(let col = startCol; col < colLength - startCol; col++) {
            matrix[startRow][col] = num++;
        }

        // fill Right
        for(let row = 1 + startRow; row < rowLength - startRow; row++) {
            matrix[row][colLength - 1 - startCol] = num++;
        }

        // fill Bottom
        for(let col = colLength - 2 - startCol; col >= startCol; col--) {
            matrix[rowLength - 1 - startRow][col] = num++;
        }

        // fill Left
        for(let row = rowLength - 2 - startRow; row > startRow; row--) {
            matrix[row][startCol] = num++;
        }

        fillMatrix(++startRow, ++startCol);
    }

    function printMatrix() {
        console.log(matrix.map(el => el.join(" ")).join('\n'));
    }
}

spiralMatrix(10, 10);