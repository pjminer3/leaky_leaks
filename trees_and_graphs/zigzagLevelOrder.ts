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

function zigzagLevelOrder(root: TreeNode | null): number[][] {
    if (!root) {
        return [];
    }

    const solution: number[][] = [];
    let currentLevelSolution: number[] = [];
    let nextLevel: TreeNode[] = [];
    let stack: TreeNode[] = [root];

    while (stack.length) {
        let node = stack.pop();

        if (!node) {
            break;
        }

        // add the node's val to the current level solution
        currentLevelSolution.push(node.val);

        // add the node's right/left nodes to the next level
        if (node.left || node.right) {
            node.left ? nextLevel.push(node.left) : null;
            node.right ? nextLevel.push(node.right) : null;
        }

        // if this is the last node in the stack, is is the last element in the level so we
        if (stack.length === 0) {
            // push currentLevelSolution into solution
            solution.push(currentLevelSolution.reduce((prev: number[], current: number) => {
                prev.push(current);
                return prev;
            }, []));
            // reset currentLevelSolution
            currentLevelSolution = [];
            // set stack = nextLevel
            stack = nextLevel;
            nextLevel = [];
        }
    }

    for (let i = 1; i < solution.length; i++) {
        if (i % 2 === 1) {
            solution[i].reverse();
        }
    }

    return solution;

};