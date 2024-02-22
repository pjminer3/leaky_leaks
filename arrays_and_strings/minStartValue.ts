/**
 * Given an array of integers nums, you start with an initial positive value startValue.
 * In each iteration, you calculate the step by step sum of startValue plus elements in nums (from left to right).
 * Return the minimum positive value of startValue such that the step by step sum is never less than 1.
 */

function minStartValue(nums: number[]): number {
    const prefixSum = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        prefixSum.push(prefixSum[prefixSum.length - 1] + nums[i]);
    }

    let min = Math.min(...prefixSum);
    return min <= 0 ? Math.abs(min - 1) : 1;
};
