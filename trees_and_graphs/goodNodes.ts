/**
 * Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.
 * Return the number of good nodes in the binary tree.
 */

function goodNodes(root: TreeNode | null): number {
    if (!root) {
        return 0
    }
    
    let dfs = (node: TreeNode | null, maxSoFar: number) => {
        if (!node) {
            return 0;
        }

        if (node.val >= maxSoFar) {
            return dfs(node.left, node.val) + dfs(node.right, node.val) + 1;
        }

        return dfs(node.left, maxSoFar) + dfs(node.right, maxSoFar);
    };

    return dfs(root, root.val);
};