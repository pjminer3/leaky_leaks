function deleteDuplicates(head: ListNode | null): ListNode | null {
    if (!head) {
        return head;
    }
    
    let currentNode: ListNode | null = head;
    
    while (currentNode) {
        if (currentNode.val === currentNode.next?.val) {
            currentNode.next = currentNode.next.next;
            continue;
        }
        
        currentNode = currentNode.next;
    }
    
    return head;
};