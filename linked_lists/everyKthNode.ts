/*
'''
❓ PROMPT
Given a linked list and a target k, return a linked list containing every kth
element.

Example(s)
head = 1 -> 3 -> 6 -> 2 -> 8 -> 9
everyKthNode(head, 3) == "6 -> 9"
 

🔎 EXPLORE
List your assumptions & discoveries:
- when counting nodes, we are 1-idexed
- a list that is shorter than K returns null
- k is an integer > 0 
- we do not include the first node

Insightful & revealing test cases:
- empty list input => return null
- list input shorter than k => return null
- 

 

🧠 BRAINSTORM
What approaches could work? 
Algorithm 1: While loop plus counter
Time: O(n)
Space: O(1)
 

📆 PLAN
Outline of algorithm #: 
- define a counter = 1
- define current = head
- define newHead: node = null;
- define prev: node = null;
- while (counter <=k) loop to find new head

-   increment counter until = k
-   reassign newHead
-   reassign current
- while loop (current) to find other nodes in list
-   increment counter. if equals k, add it to this list and reset counter to 0
-   current = current.next

 

🛠️ IMPLEMENT
function everyKthNode(node, target) {
def everyKthNode(node: Node, target: int) -> Node:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

class ListNode {
    public val: number;
    public next: ListNode | null;

    constructor(val: number, next: ListNode | null = null) {
        this.val = val;
        this.next = next;
    }
}

function everyKthNode(head: ListNode, k: number): ListNode | null {
    let counter = 1;
    let newHead: ListNode | null = null;
    let prev: ListNode | null = null;
    let current: ListNode | null = head;

    while (counter < k && current) {
        current = current.next;
        counter++;
    }

    if (counter !== k) {
        return null;
    }

    newHead = current;
    prev = current;
    counter = 0;

    while (current && prev) {
        console.log(current.val);
        current = current.next;
        counter++;

        if (counter === k) {
            prev.next = current;
            prev = current;
            counter = 0
        }
    }

    return newHead;
}



function toString(head) {
    if (!head)
      return "<empty>"
  
    let parts = []
    while(head) {
      parts.push(head.val)
      head = head.next
    }
  
    return parts.join(" -> ")
  }
  
  // 1 -> 3 -> 6 -> 2 -> 8 -> 9
  let head = new ListNode(1, new ListNode(3, new ListNode(6, new ListNode(2, new ListNode(8, new ListNode(9))))))
  console.log(toString(everyKthNode(head, 3)) == "6 -> 9")
  console.log(toString(everyKthNode(head, 1)) == "1 -> 3 -> 6 -> 2 -> 8 -> 9")
  console.log(toString(everyKthNode(head, 5)) == "8")
  console.log(toString(everyKthNode(head, 6)) == "9")
  console.log(toString(everyKthNode(head, 7)) == "<empty>")
  
  // 6
  head = new ListNode(6)
  console.log(toString(everyKthNode(head, 1)) == "6")
  console.log(toString(everyKthNode(head, 20)) == "<empty>")
  
  // 6 -> 12
  head = new ListNode(6, new ListNode(12))
  console.log(toString(everyKthNode(head, 1)) == "6 -> 12")
  console.log(toString(everyKthNode(head, 2)) == "12")
  console.log(toString(everyKthNode(null, 5)) == "<empty>")