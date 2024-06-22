function getMinimumDifference(root: TreeNode | null): number {
    const values: number[] = [];
    let minDif: number = Infinity;

    function dfs(root: TreeNode): void {
        if (!root) {
            return;
        }

        dfs(root.left);
        values.push(root.val);
        dfs(root.right);
    }

    dfs(root);

    for (let i = 0; i < values.length - 1; i++) {
        minDif = Math.min(minDif, values[i + 1] - values[i]);
    }

    return minDif;
};
