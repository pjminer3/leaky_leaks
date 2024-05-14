/**
 * Given the root of a binary tree, return the length of the diameter of the tree.
 * The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.
 * The length of a path between two nodes is represented by the number of edges between them.
 */

class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function diameterOfBinaryTree(root: TreeNode | null): number {
    let maxDiameter = 0;

    function getLongestPath(root: TreeNode | null): number {
        if (!root) {
            return 0;
        }

        let maxLeftLeg = getLongestPath(root.left);
        let maxRightLeg = getLongestPath(root.right);

        maxDiameter = Math.max(maxDiameter, maxLeftLeg + maxRightLeg);

        return Math.max(maxLeftLeg, maxRightLeg) + 1;
    }

    getLongestPath(root);

    return maxDiameter;
}