/*
'''
❓ PROMPT
We have Fellows at Formation that are waiting for their resume to be reviewed. Given an input dictionary mapping from Fellow name to an integer representing the timestamp they requested a review, return an array of Fellows that arrived earliest (at the exact same time)

Example(s)
fellowTimes = {"oliver": 3, "tobey": 3}
earliestFellows(fellowTimes) == ["oliver", "tobey"]

fellowTimes = {"oliver": 3, "pinky": 4, "pixel": 2, "tobey": 1}
earliestFellows(fellowTimes) == ["tobey"]
 

🔎 EXPLORE
List your assumptions & discoveries:
- input empty => return empty array
- all names are intentionally unique
- only positive integers
 

Insightful & revealing test cases:
- no names
- one name
- 3 names with same timestamp
- 3 names with different time stamps
- 3 names, 2 with same timestamp
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
- iterate over map, keeping track of the smallest number and an array of names that have it
Time: O(n)
Space: O(n)
 

📆 PLAN
Outline of algorithm #: 
- define namesArr
- define minTimestamp = max_value
- iterate over map
    - if value < minTimestamp
        - set new mintimestamp
        - set namesArr = [name]
    - else if vale == minTimestamp
        - add name to namesArr


return names array
 

🛠️ IMPLEMENT
function earliestFellows(fellowTimes) {
def earliestFellows(fellowTimes: dict) -> list[str]:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

function earliestFellows(fellowTimes: {[key: string]: number}): string[] {
    let namesArr: string[] = [];
    let minTimestamp = Infinity;

    for (let name in fellowTimes) {
        let timestamp = fellowTimes[name];

        if (timestamp < minTimestamp) {
            minTimestamp = timestamp;
            namesArr = [name];
        } else if (timestamp === minTimestamp) {
            namesArr.push(name);
        }
    }

    return namesArr;
}