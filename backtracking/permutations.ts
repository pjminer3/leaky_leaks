function permute(nums: number[]): number[][] {
    const solution: number[][] = [];

    function backtracking(permutation: Set<number>) {
        if (permutation.size === nums.length) {
            solution.push(Array.from(permutation));
            return;
        }

        for (let number of nums) {
            if (!permutation.has(number)) {
                permutation.add(number);
                backtracking(permutation);
                permutation.delete(number);
            }
        }
    }

    backtracking(new Set<number>);

    return solution;
};
