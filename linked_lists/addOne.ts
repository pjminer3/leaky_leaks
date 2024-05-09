class sListNode {
    public val: number;
    public next: sListNode | null;

    constructor(val: number, next: sListNode | null = null) {
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

function rAddOne(number: sListNode ): sListNode {
    function addOneCarry(number: sListNode | null): number {
        if (!number) {
            return 1;
        }

        let sum = number.val + addOneCarry(number.next);
        let newVal = sum % 10;
        let carry = Math.floor(sum / 10);

        number.val = newVal;

        return carry;
    }

    let carry = addOneCarry(number);

    if (carry) {
        number = new sListNode(1, number);
    }

    return number
}
