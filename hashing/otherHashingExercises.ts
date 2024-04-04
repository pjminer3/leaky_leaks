function missingNumber(nums: number[]): number {
    const numSet = new Set(nums);
    let i = 0;
    
    while (i <= nums.length) {
        if (!numSet.has(i)) {
            return i;
        }
        i++;
    }
    return i;
};

function countElements(arr: number[]): number {
    const nums = new Set(arr);
    let count = 0;
    
    for (const num of arr) {
        if (nums.has(num + 1)) {
            count++;
        }
    }
    return count;
};

