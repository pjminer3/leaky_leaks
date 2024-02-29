function largestValueInEachRow(root: TreeNode | null): number[] {
    // base case
    if (!root) {
        return [];
    }

    let solution: number[] = [];
    let queue: TreeNode[] = [root]

    while (queue.length) {
        let newQueue: TreeNode[] = [];
        let tempMax: number = queue[0].val;

        for (let i = 0; i < queue.length; i++) {
            let node = queue[i];
            tempMax = Math.max(tempMax, node.val);

            if (node.left) {
                newQueue.push(node.left);
            }

            if (node.right) {
                newQueue.push(node.right);
            }
        }

        solution.push(tempMax);
        queue = newQueue;
    }

    return solution;
}