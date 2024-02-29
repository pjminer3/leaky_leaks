function deepestLeavesSum(root: TreeNode | null): number {
    if (!root) {
        return 0;
    }
    let queue: TreeNode[] = [root];

    while (queue.length) {
        let nextQueue: TreeNode[] = [];
        let currentSum: number = 0;

        for (let i = 0; i < queue.length; i++) {
            let node = queue[i];
            currentSum += node.val;

            if (node.left) {
                nextQueue.push(node.left);
            }

            if (node.right) {
                nextQueue.push(node.right);
            }
        }

        if (nextQueue.length === 0) {
            return currentSum;
        } else {
            queue = nextQueue;
        }
    }
};
