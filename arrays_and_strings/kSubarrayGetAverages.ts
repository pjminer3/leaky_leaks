function getAveragesWithPrefixSum(nums: number[], k: number): number[] {
    const windowSize = k * 2 + 1;
    const solution = new Array(nums.length).fill(-1);
    const prefixSum = [0];

    for (let i = 0; i < nums.length; i++) {
        prefixSum.push(prefixSum[i] + nums[i]);
    }

    for (let i = k; i++; i <= nums.length - 1 - k) {
        solution[i] = Math.floor((prefixSum[i + k + 1] - prefixSum[i - k]) / windowSize);
    }

    return solution;
};


function getAveragesWithSlidingWindow(nums: number[], k: number): number[] {
    const numsLength = nums.length;
    const averages = new Array(numsLength).fill(-1);
    const windowSize = (k * 2) + 1;
    let windowSum = 0;
    
    for (let i = 0; i < windowSize; i++) {
        windowSum += nums[i];
    }

    if (k === 0) {
        return nums;
    } else if (windowSize > numsLength) {
        return averages;
    }
    
    averages[k] = Math.floor(windowSum / windowSize);

    for (let right = windowSize; right < numsLength; right++) {
        windowSum += nums[right];
        windowSum -= nums[right - windowSize];
        averages[right - k] = Math.floor(windowSum / windowSize);
    }

    return averages;
};
