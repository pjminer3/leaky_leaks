/**
 * Given the root of a binary tree, find the maximum value v for which there exist different nodes a and b where v = |a.val - b.val| and a is an ancestor of b.
 * A node a is an ancestor of b if either: any child of a is equal to b or any child of a is an ancestor of b.
 * 
 */

function maxAncestorDiff(root: TreeNode | null): number {
    let dfs = (root: TreeNode | null, minValue: number, maxValue: number): number => {
        if (!root) {
            return Math.abs(maxValue - minValue);
        }

        const leftMax = dfs(root.left, Math.min(minValue, root.val), Math.max(maxValue, root.val));
        const rightMax = dfs(root.right, Math.min(minValue, root.val), Math.max(maxValue, root.val));

        return Math.max(leftMax, rightMax);

    }

    return dfs(root, root.val, root.val);
};

