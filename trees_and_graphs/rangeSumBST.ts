function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
    let sum = 0;

    if (!root) {
        return sum;
    }

    let queue: TreeNode[] = [root];

    while (queue.length) {
        let newQueue: TreeNode[] = [];
        for (let i = 0; i < queue.length; i++) {
            let node = queue[i];
            if (node.val >= low && node.val <= high) {
                sum += node.val;
            }

            if (node.val > low) {
                if (node.left) newQueue.push(node.left);
            }

            if (node.val < high) {
                if (node.right) newQueue.push(node.right);
            }
        }

        queue = newQueue;
    }

    return sum;
};