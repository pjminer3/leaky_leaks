function combine(n: number, k: number): number[][] {
    const solution: number[][] = [];
    
    function backtrack(combination: number[], i: number): undefined {
        if (combination.length === k) {
            solution.push(combination);
            return;
        }


        for (let j = i; j <= n; j++) {
            backtrack([...combination, j], j+ 1);
        }
    }

    backtrack([], 1);

    return solution;
};