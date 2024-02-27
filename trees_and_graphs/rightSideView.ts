/**
 * Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.
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

function rightSideViewBfs(root: TreeNode | null): number[] {
    if (!root) {
        return [];
    }

    let queue = [root];
    let soltuion: number[] = [];

    while (queue.length) {
        let nextQueue: TreeNode[] = [];

        for (let i = 0; i < queue.length; i++) {
            let node = queue[i];

            if (node.left) {
                nextQueue.push(node.left);
            }

            if (node.right) {
                nextQueue.push(node.right)
            }
        }

        let rightMostNode = queue.pop();
        if (rightMostNode) {
            soltuion.push(rightMostNode.val);
        };

        queue = nextQueue;
    }

    return soltuion;
}