/**
 * You are given a 0-indexed integer array nums of length n.
 * nums contains a valid split at index i if the following are true:
 * The sum of the first i + 1 elements is greater than or equal to the sum of the last n - i - 1 elements.
 * There is at least one element to the right of i. That is, 0 <= i < n - 1.
 * Return the number of valid splits in nums.
 */

function waysToSplitArray(nums: number[]): number {
    const prefixSum = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        prefixSum.push(prefixSum[prefixSum.length - 1] + nums[i]);
    };

    return prefixSum.reduce(
        (prev, current, i) => {
            return prev + current >= prefixSum[prefixSum.length - 1] - current ? 1 : 0
        }, 0);
}