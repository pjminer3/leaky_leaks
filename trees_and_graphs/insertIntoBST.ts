function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
    if (!root) {
        return new TreeNode(val);
    }
    
    let cur = root;
    
    while (cur) {
        if (val < cur.val) {
            if (cur.left) {
                cur = cur.left
            } else {
                cur.left = new TreeNode(val);
                cur = cur.left;
                break;
            }
        } else {
            if (cur.right) {
                cur = cur.right;
            } else {
                cur.right = new TreeNode(val);
                break;
            }
        }
    }
    
    return root;
};