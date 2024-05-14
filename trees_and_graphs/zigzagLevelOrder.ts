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
    const solution: number[][] = [];
    
    if (!root) {
        return solution;
    }
    
    let queue: TreeNode[] = [root];
    let direction = 0;
    
    while (queue.length) {
        let nextLevel: TreeNode[] = [];
        
        for (let i = 0; i < queue.length; i++) {
            let currNode = queue[i];
            if (currNode.left) nextLevel.push(currNode.left);
            if (currNode.right) nextLevel.push(currNode.right);
        }
        
        solution.push(direction % 2 === 0 ? [...queue.map(node => node.val)] : [...queue.reverse().map(node => node.val)]);
        queue = nextLevel;
        direction++;
    };

    return solution;
};