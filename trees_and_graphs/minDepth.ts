function minDepth(root: TreeNode | null): number {
    const minDepthDFS = (root: TreeNode | null, minDepth: number): number => {
        if (!root) {
            return minDepth;
        }

        let newMinDepth = minDepth + 1;

        if (!root.left && !root.right) {
            return newMinDepth;
        }

        return Math.min(minDepthDFS(root.left, newMinDepth), minDepthDFS(root.right, newMinDepth));
    };

    return minDepthDFS(root, 0);
};