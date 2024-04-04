/*
'''
🔎 EXPLORE
What are some other insightful & revealing test cases?
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O(n)
Space: O(n)
 

📆 PLAN
Outline of algorithm #: 
 Creeate a hash to count element frequencies
 iterate elements in array
 count unique elements

🛠️ IMPLEMENT
Write your algorithm.
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

function numUniqueElementes(arr: number[]): number {
    let uniqueElements = 0;
    let frequencies = new Map();

    for (let num in arr) {
        let numCount = frequencies.has(num) ? frequencies.get(num) + 1 : 1;
        
        if (numCount === 1) {
            uniqueElements++;
        } else if (numCount === 2) {
            uniqueElements--;
        }

        frequencies.set(num, numCount);
    }

    return uniqueElements;
}
