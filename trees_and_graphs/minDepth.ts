function minDepth(root: TreeNode | null): number {
    const minDepthDFS = (root: TreeNode | null, minDepth: number): number => {
        if (!root) {
            return minDepth;
        }

        let newMinDepth = minDepth + 1;
        let leftMinDepth = minDepthDFS(root.left, newMinDepth);
        let rightMinDepth = minDepthDFS(root.right, newMinDepth);

        if (!root.left) {
            return rightMinDepth;
        }
        
        if (!root.right) {
            return leftMinDepth;
        }

        return Math.min(rightMinDepth, leftMinDepth);
    };

    return minDepthDFS(root, 0);
};