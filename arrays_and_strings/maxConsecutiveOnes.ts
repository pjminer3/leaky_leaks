/**
 * Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.
 */

function maxConsecutiveOnes(nums: number[], k: number): number {
    let remainingFlips = k;
    let left = 0;
    let right = -1;

    while (right < nums.length - 1) {
        right++; 
        if (nums[right] === 0) {
            remainingFlips--;
        }

        if (remainingFlips < 0) {
            remainingFlips = remainingFlips + 1 - nums[left];
            left++;
        }
    } 

    return right - left + 1;
}

    
