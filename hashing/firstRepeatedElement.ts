/*
'''
❓ PROMPT
Given an array, return the first element is repeated if you were to traverse the array from left to right.

Example(s)
firstRepeatedElement([1, 2, 3, 2, 1, 1]) == 2
 

🔎 EXPLORE
List your assumptions & discoveries:
 - what types of elements can the array include? any
 - can we assume the array can be empty? yes, return the empty array
 - what if there are no repeated elements? return the array


Insightful & revealing test cases:
- empty array
- array with no repeats
- different types of elements
- array with repeats
- array with only repeats 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O(n)
Space: O(n)
create a set, loop through array adding elements to set and checking if elements in set
 

📆 PLAN
Outline of algorithm #: 
- create seenSet
- loop through array
    - check if in seenSet
        -yes: return element
        -no: add to seenSet
- return array
 

🛠️ IMPLEMENT
function firstRepeatedElement(arr) {
def firstRepeatedElement(arr: list[int]) -> int: 
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

function firstRepeatedElement(array: number[]): number | number[] {
    let seen = new Set();
    for (let num of array) {
        if (seen.has(num)) {
            return num;
        } else {
            seen.add(num);
        }
    }
    return array;
}

