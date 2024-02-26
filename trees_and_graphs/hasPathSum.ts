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

function hasPathSumIterative(root: TreeNode | null, targetSum: number): boolean {
    if (!root) {
        return false;
    }

    const stack: [TreeNode, number][] = [[root, targetSum]];

    while (stack.length) {
        let poppedNode = stack.pop();

        if (!poppedNode) {
            break;
        }

        let [node, newTargetSum] = poppedNode;

        if (!node.left && !node.right) {
            if (node.val === newTargetSum) {
                return true;
            }
        }

        if (node.left) {
            stack.push([node.left, newTargetSum - node.val]);
        }
        if (node.right) {
            stack.push([node.right, newTargetSum - node.val]);
        }
    }

    return false
}