function isValidBST(root: TreeNode | null): boolean {
    function dfs(root: TreeNode | null, small: number, large: number): boolean {
        if (!root) {
            return true;
        }

        if (root.val >= large) {
            return false;
        }
        if (root.val <= small) {
            return false;
        }

        return dfs(root.left, small, root.val) && dfs(root.right, root.val, large)
    }

    return dfs(root, -Infinity, Infinity);
};