function getMinimumDifferenceBST(root: TreeNode | null): number {
    let minDif = Infinity;

    let cur = root;
    const stack: TreeNode[] = [];
    const values: number[] = [];

    while (cur || stack.length) {
        if (cur) {
            stack.push(cur);
            cur = cur.left;
        } else {
            cur = stack.pop();
            values.push(cur.value);
            cur = cur.right;
        }
    }

    for (let i = 1; i < values.length; i++) {
        minDif = Math.min(minDif, values[i] - values[i - 1]);
    }

    return minDif;
};