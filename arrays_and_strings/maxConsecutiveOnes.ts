/**
 * Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.
 */

function maxConsecutiveOnes(nums: number[], k: number): number {
    let remainingFlips: number = k;
    let maxOnes: number = 0;
    let left: number = 0, right: number = -1;

    // start with left at 0, right at -1
    // while right < nums length - 1
    while (right < nums.length - 1) {
        right++;
        remainingFlips - 1 + nums[right];
        
        if (remainingFlips >= 0) {
            maxOnes = Math.max(maxOnes, right - left + 1);
        } else {
            remainingFlips + 1 - nums[left];
            left++;
        }
    }
    

    return maxOnes;
};
