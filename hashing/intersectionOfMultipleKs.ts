/**
 * Given a 2D integer array nums where nums[i] is a non-empty array of distinct positive integers,
 * return the list of integers that are present in each array of nums sorted in ascending order.
 */

function intersection(list: number[][]): number[] {
    const solution: number[] = [];
    const counts = new Map();
    
    for (const nums of list) {
        for (const number of nums) {
            const newCount = (counts.get(number) || 0) + 1;
            counts.set(number, newCount);
            if (newCount === list.length) solution.push(number);
        }
    }

    return solution.sort((a, b) => a - b);
}