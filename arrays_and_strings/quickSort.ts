function sortArray(nums: number[]): number[] {
    quicksort(nums, 0, nums.length - 1);
    return nums;
};

function quicksort(array: number[], start: number, end: number) {
    if (start >= end) return;

    let pivotIndex = partition(array, start, end);
    quicksort(array, start, pivotIndex - 1);
    quicksort(array, pivotIndex + 1, end);
}

function partition(array: number[], start: number, end: number): number {
    let pivotEl = array[end];
    let i = start - 1;

    for (let j = start; j <= end - 1; j++) {
        if (array[j] < pivotEl) {
            i++;
            [array[j], array[i]] = [array[i], array[j]];
        }
    }
    i++;

    return i;
}