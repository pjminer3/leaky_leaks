/*
'''
❓ PROMPT
A bug in the Formation session tool accidentally duplicated some Fellows in sessions. Given an array of names representing Fellows in a session, return an array of the distinct Fellows. The array must be in the same order as the input.

Follow-up question:
How would removing the Fellows in place, instead of using a new output array, affect the algorithm's runtime?

Example(s)
["oliver", "pixel", "oliver", "pinky"] => ["oliver", "pixel", "pinky"]
 

🔎 EXPLORE
List your assumptions & discoveries:
- [] => []
- null input => throw error
- 

 

Insightful & revealing test cases:
- empty array
- array with all one name
- 


🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
- create solution array, create storage map
- loop through names array
    - check to see if name is in map. If so
        - set set[name] 
    - if not
        - add name to solution array
        - set set[name]
- return solution array
Time: O(N)
Space: O(N)

Alorithm 2:
- create 'right' index, set it to arr.leng
- create 'left' index, set to 0
- create storage set
- creat while loop; while left <= right
    - check to see if arr[left] is in map, if so
        - switch arr[left] and arr[right]
        - arr.pop()
        - right--
    - else
        - set[arr[left]]
        - left++
Time: O(N)
Space: O(1)
 

📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT
function removeDuplicateFellows(fellows) {
def removeDuplicateFellows(fellows: list[str]) -> list[str]:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

function removeDuplicateFellows(fellows: string[]) { 
    let right = fellows.length - 1;
    let left = 0;
    let nameSet = new Set();

    while (left <= right) {
        if (nameSet.has(fellows[left])) {
            [fellows[left], fellows[right]] = [fellows[right], fellows[left]];
            fellows.pop();
            right--;
        } else {
            nameSet.add(fellows[left]);
            left++;
        }
    }

    return fellows;
}


console.log(JSON.stringify(removeDuplicateFellows(
    ["oliver", "pixel", "oliver", "pinky"]))
    === '["oliver","pixel","pinky"]')
  
  console.log(JSON.stringify(removeDuplicateFellows([])) === "[]")
  
  console.log(JSON.stringify(removeDuplicateFellows(["Oliver", "oliver"]))
    === '["Oliver","oliver"]')
  
  console.log(JSON.stringify(removeDuplicateFellows(["pinky"]))
    === '["pinky"]')
  
  console.log(JSON.stringify(removeDuplicateFellows(["pinky", "pinky", "pinky"]))
    === '["pinky"]')
  
  console.log(JSON.stringify(removeDuplicateFellows(["pinky", "paavo"]))
    === '["pinky","paavo"]')
