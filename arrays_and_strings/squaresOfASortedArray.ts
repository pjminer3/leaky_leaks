/**
 * Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
 */

function squaresOfSortedArray(nums: number[]): number[] {
    let leftIndex = 0, rightIndex = nums.length-1, solutionIndex = nums.length-1;
    let left: number;
    let right: number;

    const solution: number[] = Array(nums.length);

    while (leftIndex <= rightIndex) {
        left = nums[leftIndex] ** 2;
        right = nums[rightIndex] ** 2;
        if (left > right) {
            solution[solutionIndex] = left;
            leftIndex++;
        } else {
            solution[solutionIndex] = right;
            rightIndex--;
        }
        solutionIndex--;
    }
    
    return solution;
};
