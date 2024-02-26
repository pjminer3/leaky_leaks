// class TreeNode {
//     val?: number
//     left?: TreeNode | null
//     right?: TreeNode | null
//     constructor(val?: number, left?: TreeNode, right?: TreeNode) {
//         this.val = val ?? 0;
//         this.left = left ?? null;
//         this.right = right ?? null;
//     }
// };

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    if (!root) {
        return false;
    }

    if (!root.left && !root.right) {
        return targetSum === root.val;
    }

    const newVal = targetSum - root.val;
    return hasPathSum(root.left, newVal) || hasPathSum(root.right, newVal);
};