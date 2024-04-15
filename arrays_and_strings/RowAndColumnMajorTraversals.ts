function linearizeColumnMajor(matrix: number[][]): number[] {
    const solution: number[] = [];
    for (let row of matrix) {
        for (let element of row) {
            solution.push(element);
        }
    }
    return solution;
};

function linearizeRowMajor(matrix: number[][]): number[] {
    const solution: number[] = [];

    for (let i = 0; i < matrix[0].length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            solution.push(matrix[j][i]);
        }
    }
    
    return solution;
};


