/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */


function levelOrder(root: TreeNode | null): number[][] {
    const solution = [];

    if (!root) {
        return solution;
    }

    let solutionLevel: number[] = [];
    let currentLevel: TreeNode[] = [root];
    let nextLevel: TreeNode[] = [];

    while (currentLevel.length) {
        for (let i = 0; i < currentLevel.length; i++) {
            let node = currentLevel[i];
            if (!node) continue;
            solutionLevel.push(node.val);
            nextLevel.push(node.left);
            nextLevel.push(node.right);
        }

        if (solutionLevel.length) solution.push([...solutionLevel]);
        currentLevel = nextLevel;
        solutionLevel = [];
        nextLevel = []
    }

    return solution;
};