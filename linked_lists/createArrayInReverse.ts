class LinkedListN {
    public val: any;
    public next?: LinkedListN;
  
    constructor(val: any, next?: LinkedListN) {
      this.val = val;
      this.next = next;
    }
  }
  
  function createArrayInReverse(LinkedListN: LinkedListN) {
    const elements: any[] = [];
    let currentLinkedListN: LinkedListN | undefined = LinkedListN;
  
    while (currentLinkedListN) {
      elements.push(currentLinkedListN.val);
      currentLinkedListN = currentLinkedListN.next;
    }
  
    const solution = Array(elements.length);
  
    for (let i = elements.length - 1; i >= 0; i--) {
      solution[elements.length - 1 - i] = elements[i];
    }
  
    return solution;
  }