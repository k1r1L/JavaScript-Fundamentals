function solve(inputStrings) {
    let originalMatrix = [];
    let newMatrix = [];
    inputStrings.forEach(function (row) {
        originalMatrix.push(row.split(""));
        newMatrix.push(row.split(""));
    });

    originalMatrix.forEach(function (arr, row) {
        arr.forEach(function (el, col) {
            let currentEl = originalMatrix[row][col];
            let upperLeft = isInside(row - 1, col - 1, originalMatrix)
                ? originalMatrix[row - 1][col - 1]
                : undefined;
            let upperRight = isInside(row - 1, col + 1, originalMatrix)
                ? originalMatrix[row - 1][col + 1]
                : undefined;
            let lowerLeft = isInside(row + 1, col - 1, originalMatrix)
                ? originalMatrix[row + 1][col - 1]
                : undefined;
            let lowerRight = isInside(row + 1, col + 1, originalMatrix)
                ? originalMatrix[row + 1][col + 1]
                :undefined;
            if(upperLeft && upperRight && lowerLeft && lowerRight){
                let allElements =  [upperLeft, upperRight ,currentEl, lowerLeft, lowerRight]
                    .map(el => el.toLowerCase());
                let areEqual = allElements.every((el) => el === allElements[0]);
                if (areEqual) {
                    newMatrix[row][col] = "";
                    newMatrix[row - 1][col - 1] = "";
                    newMatrix[row - 1][col + 1] = "";
                    newMatrix[row + 1][col - 1] = "";
                    newMatrix[row + 1][col + 1] = "";
                }
            }
        })

    });

    console.log(newMatrix.map(row => row.join('')).join('\n'));

    function isInside(row, col, matrix) {
        return row >= 0 && row < matrix.length
            && col >= 0 && col < matrix[row].length;
    }
}
