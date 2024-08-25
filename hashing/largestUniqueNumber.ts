class NumberHolder {
    numbers: number[]
    numCounts: Map<number, number>

    constructor(numbers: number[]) {
        this.numbers = numbers;
        this.numCounts = new Map();
    }

    largestUniqueNumber(): number {
        for (let number of this.numbers) {
            this.numCounts.set(number, (this.numCounts.get(number) || 0) + 1);
        }

        let max = -1;

        for (let [number, count] of this.numCounts) {
            if (count === 1 && number > max) {
                max = number;
            }
        }

        return max;
    }
}