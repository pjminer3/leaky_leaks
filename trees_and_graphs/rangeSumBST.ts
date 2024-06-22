function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
    let sum = 0;

    function dfs(root: TreeNode): void {
        if (!root ) {
            return;
        }

        if (root.val > high) {
            dfs(root.left);
        } else if (root.val < low) {
            dfs(root.right);
        } else {
            sum += root.val;
            dfs(root.left);
            dfs(root.right);
        }
    }
    dfs(root);

    return sum;
};