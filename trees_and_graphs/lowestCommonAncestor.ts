function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    // base case; root is null, return null
    if (!root) {
        return null;
    }

    // root is p or q, return root
    if (root == p || root == q) {
        return root;
    }

    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);

    // if p is in left and q is in right, or vice versa, return this node
    if (left && right) {
        return root;
    }

    return left ?? right;
};