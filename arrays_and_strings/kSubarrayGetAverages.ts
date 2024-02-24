function getAverages(nums: number[], k: number): number[] {
    const windowSize = k * 2 + 1;
    const solution: number[] = new Array(nums.length).fill(-1);
    const prefixSum: number[] = new Array(solution.length + 1).fill(0);

    if (k === 0) {
        return nums;
    }

    if (solution.length < windowSize) {
        return solution;
    }

    for (let i = 0; i < nums.length; i++) {
        prefixSum[i + 1] = prefixSum[i] + nums[i];
    };

    for (let i = k; i < prefixSum.length - k - 1; i++) {
        solution[i] = Math.floor((prefixSum[i + k + 1] - prefixSum[i - k]) / windowSize);
    }

    return solution;
};
