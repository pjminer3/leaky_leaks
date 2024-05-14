function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
    let sum = 0;

    if (!root) {
        return sum;
    }

    let queue = [root];

    while (queue.length) {
        let newQueue: (TreeNode | null)[] = [];
        for (let i = 0; i < queue.length; i++) {
            let node = queue[i];
            if (node.val >= low && node.val <= high) {
                sum += node.val;
            }

            if (node.val > low) {
                newQueue.push(node.left);
            }
        }
    }
};