/**
 * 
 * @param nums Given an integer array nums of unique elements,
 * return all possible subsets
 (the power set).

The solution set must not contain duplicate subsets.
Return the solution in any order.

 

Example 1:

Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
Example 2:

Input: nums = [0]
Output: [[],[0]]
 */

function subsets(nums: number[]): number[][] {
    const solution: number[][] = [];

    function backtrack(subset: number[], remainingNumbers: number[]) {
        if (remainingNumbers.length === 0) {
            solution.push([...subset]);
        }
        
        const currentNum = remainingNumbers.pop()!;

        backtrack([...subset], remainingNumbers);
        backtrack([...subset, currentNum], remainingNumbers);
        remainingNumbers.push(currentNum);


    }

    backtrack([], nums);

    return solution;
};
