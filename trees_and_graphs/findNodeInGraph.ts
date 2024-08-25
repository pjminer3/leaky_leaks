/*
'''
❓ PROMPT
Given a starting node in a graph and a target, traverse the graph using DFS and return true if a node with
the target value exists, and false otherwise

Example(s)
  1
 / \
2   3
node.hasPathTo(3) == true
node.hasPathTo(4) == false

12
|
18
| \
1  4 - 3
   |
   9
node.hasPathTo(9) === true
node.hasPathTo(14) === false
 

🔎 EXPLORE
List your assumptions & discoveries:
 

Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT
function hasPathTo(node, target) {
hasPathTo(target) { // Alternatively, if it's written inside the Node class

def hasPathTo(node: Node, target: int) -> bool:
def hasPathTo(self, target: int) -> bool: # Alternatively, if it's written inside the Node class
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

class GraphNode {
    val: number;
    neighbors: GraphNode[];

    constructor(val: number = 0, neighbors: GraphNode[] = []) {
        this.val = val;
        this.neighbors = neighbors;
    }
}

function hasPathTo(node: GraphNode, num: number): boolean {

};

let node = new GraphNode(1, [new GraphNode(2), new GraphNode(3)])

// standalone version
console.log(hasPathTo(node, 3) === true)
console.log(hasPathTo(node, 4) === false)

node = new GraphNode(12, [
  new GraphNode(18, [new GraphNode(1), new GraphNode(4, [new GraphNode(3), new GraphNode(9)])])
])

// standalone version
console.log(hasPathTo(node, 9) === true)
console.log(hasPathTo(node, 14) === false)
console.log(hasPathTo(node, 0) === false)
console.log(hasPathTo(null, 0) === false)
console.log(hasPathTo(node, 12) === true)

node = new GraphNode(1)

// standalone version
console.log(hasPathTo(node, 1) === true)
console.log(hasPathTo(node, 2) === false)

node = new GraphNode(1, [new GraphNode(2), new GraphNode(3)])
let cycleNode = new GraphNode(5, [node])
node.neighbors.push(cycleNode)

// standalone version
console.log(hasPathTo(node, 1) === true)
console.log(hasPathTo(node, 2) === true)
console.log(hasPathTo(node, 5) === true)
console.log(hasPathTo(node, 4) === false)

node = new GraphNode(12, [
  new GraphNode(18, [new GraphNode(5), new GraphNode(5, [new GraphNode(5), new GraphNode(5)])])
])

// standalone version
console.log(hasPathTo(node, 12) === true)
console.log(hasPathTo(node, 5) === true)
console.log(hasPathTo(node, 4) === false)

let cycleNode1 = new GraphNode(3)
let cycleNode2 = new GraphNode(2)
cycleNode1.neighbors.push(cycleNode2)
cycleNode2.neighbors.push(cycleNode1)
node = new GraphNode(12, [
  new GraphNode(18, [new GraphNode(5), cycleNode1, new GraphNode(5, [
    new GraphNode(5), cycleNode2, new GraphNode(5)])])])

// standalone version
console.log(hasPathTo(node, 12) === true)
console.log(hasPathTo(node, 2) === true)
console.log(hasPathTo(node, 3) === true)
console.log(hasPathTo(node, 5) === true)
console.log(hasPathTo(node, 4) === false)