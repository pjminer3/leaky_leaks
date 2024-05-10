function segmentLinkedList(head, parts) {
    const solution = [];
    let current = head;
    let tempHead = head;
    let listLength = 0;
    while (current) {
      current = current.next;
      listLength++;
    }
  
    let partitionLength = Math.floor(listLength / parts);
    let partitionsWithExtraListode = listLength % parts;
    let i = 1;
    current = tempHead;
    while (current) {
      if (partitionsWithExtraListode > 0 && current == tempHead) {
        current = current.next;
        partitionsWithExtraListode--;
      }
      if (i === partitionLength) {
        solution.push(tempHead);
        tempHead = current.next
        current.next = null;
        current = tempHead;
        i = 1;
      } else {
        current = current.next;
        i++;
      }
    }
  
    return solution
  }