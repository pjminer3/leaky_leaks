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

/**
 * Given the root of a binary tree, return its maximum depth.
 * A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
 */

class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null

    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val ?? 0;
        this.left = left ?? null;
        this.right = right ?? null;
    }
}

function maxDepthRecursive(root: TreeNode | null): number {
    if (!root) {
        return 0;
    }

    return 1 + Math.max(maxDepthRecursive(root.left), maxDepthRecursive(root.right));
};

function maxDepthIterative(root: TreeNode | null): number {
    if (!root) {
        return 0;
    }

    let maxDepth = 0;

    const stack: [TreeNode, number][] = [[root, 1]];

    let node: TreeNode, ans: number;
    let currentNode: [TreeNode, number][];

    while (stack.length > 0) {
        let poppedNode = stack.pop();

        if (!poppedNode) {
            break;
        }

        [node, ans] = poppedNode;
        maxDepth = Math.max(maxDepth, ans);

        if (node.left) {
            stack.push([node.left, ans + 1]);
        }
        if (node.right) {
            stack.push([node.right, ans + 1]);
        }
    }

    return maxDepth;
}