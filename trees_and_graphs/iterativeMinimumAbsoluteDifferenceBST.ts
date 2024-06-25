function getMinimumDifferenceBST(root: TreeNode | null): number {
    let minDif = Infinity;

    let cur = root;
    const stack: TreeNode[] = [];
    const values: number[] = [];

    while (cur || stack.length) {
        // if there's a cur, push to stack and make cur = cur.left
        if (cur) {
            stack.push(cur);
            cur = cur.left;
        } else {
            // if there isn't a current, make cur = stack.pop(), push the value to values, and make right the cur
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