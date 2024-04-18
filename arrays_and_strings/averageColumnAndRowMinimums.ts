function averageColumnMinimum(matrix: number[][]): number {
    if (matrix.length === 0 || matrix[0].length === 0) {
      return 0;
    }
  
    let minAverage = 0;
  
    for (let i = 0; i < matrix[0].length; i++) {
      let columnMin = Infinity;
  
      for (let j = 0; j < matrix.length; j++) {
        columnMin = Math.min(columnMin, matrix[j][i]);
      }
  
      minAverage = (minAverage * (i) + columnMin) / (i + 1)
    }
  
    return minAverage;
  };
  
  function averageRowMinimum(matrix: number[][]): number {
    if (matrix.length === 0 || matrix[0].length === 0) {
      return 0;
    }
  
    let minAverage = 0;
  
    for (let i = 0; i < matrix.length; i++) {
      let rowMin = Infinity;
  
      for (let j = 0; j < matrix[0].length; j++) {
        rowMin = Math.min(rowMin, matrix[i][j]);
      }
  
      minAverage = (minAverage * (i) + rowMin) / (i + 1)
    }
  
    return minAverage;
  };