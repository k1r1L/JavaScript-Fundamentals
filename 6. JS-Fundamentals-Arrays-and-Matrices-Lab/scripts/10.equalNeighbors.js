function equalNeighbors(matrix) {
    let counter = 0;
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[i].length; j++) {
            let current = matrix[i][j];
            if (i < matrix.length - 1) {
                let downstairs = matrix[i + 1][j];
                if (current === downstairs) {
                    counter++;
                }
            }

            if (j < matrix.length - 1) {
                let right = matrix[i][j + 1];
                if (current === right) {
                    counter++;
                }
            }
        }
    }

    return counter;
}