class TreeNode {
    val?: number
    left?: TreeNode
    right?: TreeNode
    constructor(val: number, left?: TreeNode, right?: TreeNode) {
        this.val = val ?? 0;
        this.left = left;
        this.right = right;
    }
};

function isValidBST(root: TreeNode | null): boolean {
    if (!root) {
        return true;
    }

    const stack: [TreeNode, number, number][] = [[root, -Infinity, Infinity]];

    while (stack.length) {
        const [node, min, max]: [TreeNode, number, number] = stack.pop()!;

        if (!node) continue;

        if (node.val <= min || node.val >= max) {
            return false;
        }

        stack.push([node.left, min, node.val]);
        stack.push([node.right, node.val, max]);
    }

    return true;

};