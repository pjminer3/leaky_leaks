function closestValueIterative(root: TreeNode, target: number): number {
    // get min diff between root node and target
    let minDif = Infinity;
    let minDifNode: TreeNode;
    // if root node is less than target, then only a closer node is on left side, else on right

    let cur: TreeNode | null = root;
    while (cur) {
        let newMinDif = Math.abs(cur.val - target);
        if (newMinDif === minDif) {
            minDifNode = minDifNode.val < cur.val ? minDifNode : cur;
        } else if (newMinDif < minDif) {
            minDif = newMinDif;
            minDifNode = cur;
        }

        cur = target > cur.val ? cur.right : cur.left;
    }

    return minDifNode.val;
};