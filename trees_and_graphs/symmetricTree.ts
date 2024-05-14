
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


function isSymmetric(root: TreeNode | null): boolean {
    function traverseTree(level: [TreeNode | null][]): boolean {
        if (level.length === 0) {
            return true;
        }

        let nextLevel: [TreeNode | null][] = [];

        for (let i = 0; i < level.length; i++) {
            let node = level[i]!;
            if (node) {
                nextLevel.push(node.left);
                nextLevel.push(node.right);
            }
        };

        let levelPasses = true;

        for (let i = 0, j = level.length - 1; i < j; i++, j--) {
            let left = level[i];
            let right = level[j];

            if (!left || !right) {
                if (left || right) {
                    levelPasses = false;
                }
            } else {
                if (left.val !== right.val) {
                    levelPasses = false;
                }
            }
        }

        return levelPasses && traverseTree(nextLevel);
    }

    return traverseTree([root]);
};