/*
Given a linked list with each node representing a digit in an integer,
add 1 to the number.The head holds the most significant digit and tail holds
the least significant digit.
Here is some starting code to implement and print out a linked list in Python.

Harder variations:
1. Do it both recursively and iteratively.


EXAMPLE(S)
head = 1 -> 2 -> 9 -> None
head = addOne(head)

Output: 1 -> 3 -> 0 -> None
 

FUNCTION SIGNATURE
class Node {
  constructor(val, next) {
    this.val = val
    this.next = next
  }

  toString() {
    let curr = this
    let str = ''
  
    while (curr) {
      str += curr.val
      curr = curr.next
    } 

    return str
  }
}

function addOne(head) {
*/

class sListNode {
    public val: number;
    public next: sListNode | null;

    constructor(val, next = null) {
      this.val = val
      this.next = next
    }
  
    toString() {
      let curr: sListNode | null = this
      let str = ''
    
      while (curr) {
        str += curr.val
        curr = curr.next
      } 
  
      return str
    }
}

function reverse(list: sListNode | null): sListNode | null {
    if (!list) {
        return list;
    }

    let prev: sListNode | null = null;
    let current: sListNode | null = list;

    while (current) {
        [prev, current.next, current] = [current, prev, current.next];
    }

    return prev;
}

function iAddOne(number: sListNode): sListNode | null {
    if (!number) {
        return number;
    }

    // reverse the linked list
    let reversedList = reverse(number);

    let carry = 1;
    let current = reversedList;
    let prev: sListNode | null = current;

    while (current) {
        let sum = current.val + carry;
        let newVal= sum % 10;
        carry = Math.floor(sum / 10);
        current.val = newVal;
        prev = current;
        current = current.next;
    }

    if (carry && prev) {
        prev.next = new sListNode(carry);
    }

    let solution = reverse(reversedList);

    console.log(solution?.toString());

    return solution;
};

function rAddOne(number: sListNode | null): sListNode | null {
    if (!number) {
        return number;
    }

    
}
