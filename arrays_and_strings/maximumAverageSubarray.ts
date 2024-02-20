/**
 * You are given an integer array nums consisting of n elements, and an integer k.
 * Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.
 */

function findMaxAverage(nums: number[], k: number): number {
    let currentSum: number = 0;
    let currentMaximumAverage: number;

    for (let i = 0; i < k; i++) {
        currentSum += nums[i];
    }

    currentMaximumAverage = currentSum / k;

    for (let left = 1; left <= nums.length - k; left++) {
        currentSum -= nums[left - 1];
        currentSum += nums[left + (k - 1)];

        currentMaximumAverage = currentSum / k > currentMaximumAverage ? currentSum / k : currentMaximumAverage;
    }

    return currentMaximumAverage;
}