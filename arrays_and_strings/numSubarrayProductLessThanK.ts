/**
 * 
 * Given an array of integers nums and an integer k, return the number of contiguous subarrays where the product of all the elements in the subarray is strictly less than k.
 * 
 */

function numSubarrayProductLessThanK(nums: number[], k: number): number {
    let leftIndex = 0;
    let curr = nums[leftIndex];
    let sum = curr < k ? 1 : 0;
    
    for (let i = 1; i < nums.length; i++) {
        curr *= nums[i];
        while (curr >= k && leftIndex <= i) {
            curr /= nums[leftIndex];
            leftIndex++;
        }
        sum += (i - leftIndex + 1);
    }
    return sum;
};
