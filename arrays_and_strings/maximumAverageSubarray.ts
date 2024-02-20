/**
 * You are given an integer array nums consisting of n elements, and an integer k.
 * Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.
 */

function findMaxAverage(nums: number[], k: number): number {
    let currentSum = nums.slice(0, k).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    let maxSum = currentSum;

    for (let left = 1; left <= nums.length - k; left++) {
        currentSum -= nums[left - 1];
        currentSum += nums[left + (k - 1)];
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum / k;
}

// Time complexity is O(k + n) = O(n)
// Space complexity is O(1)