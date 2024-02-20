/**
 * 
 * Given an array of integers nums and an integer k, return the number of contiguous subarrays where the product of all the elements in the subarray is strictly less than k.
 * 
 */

function numSubarrayProductLessThanK(nums: number[], k: number): number {
    let leftIndex = 0;
    let currentProduct = nums[leftIndex];
    let count = currentProduct < k ? 1 : 0;
    
    for (let i = 1; i < nums.length; i++) {
        currentProduct *= nums[i];
        while (currentProduct >= k && leftIndex <= i) {
            currentProduct /= nums[leftIndex];
            leftIndex++;
        }
        count += (i - leftIndex + 1);
    }
    return count;
};
