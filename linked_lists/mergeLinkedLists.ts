//  class ListNode {
//      val: number
//      next: ListNode | null
//      constructor(val?: number, next?: ListNode | null) {
//          this.val = (val===undefined ? 0 : val)
//          this.next = (next===undefined ? null : next)
//      }
//  

function mergeLinkedLists(listOne: ListNode | null, listTwo: ListNode | null) {
    if (!listOne || !listTwo) {
        return listOne || listTwo;
    }

    let sHead = new ListNode(-Infinity);
    let current = sHead;

    while (listOne || listTwo) {
        if (!listOne || !listTwo) {
            current.next = (listOne || listTwo);
            break;
        } else {
            if (listOne.val < listTwo.val) {
                current.next = listOne;
                listOne = listOne.next;
            } else {
                current.next = listTwo;
                listTwo = listTwo.next;
            }
            current = current.next;
        }
    }

    return sHead.next;
}

function mergeLinkedListsRecursive(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (!list1 || !list2) {
        return list1 || list2;
    }

    if (list1.val > list2.val) {
        list2.next = mergeLinkedListsRecursive(list1, list2.next);
        return list2;
    } else {
        list1.next = mergeLinkedListsRecursive(list1.next, list2);
        return list1;
    }
}