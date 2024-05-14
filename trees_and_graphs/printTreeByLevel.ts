/**
 * Q. Given a binary tree, print level order traversal so that nodes of all levels are printed in several lines

Examples:
• Given a binary tree:
                 1
                / \ 
               2   3
// returns [[1], [2, 3]]
 */

function printTree(root: TreeNode): TreeNode[][] {
    if (!root) {
        return root;
    }

    let solution: TreeNode[][] = [];
    let level: TreeNode[] = [];
    level.push(root);
    let nextLevel: TreeNode[] = [];

    while (level.length) {
        // push level to solution
        solution.push([...level]);
        
        // while loop to populate next level
        while (level.length > 0) {
            let node = level.pop()!;
            if (node.left) nextLevel.push(node.left);
            if (node.right) nextLevel.push(node.right);
        }

        // reassign level to nextLevel
        level = nextLevel;
        // reassign nextLevel
        nextLevel = [];
    }

    return solution;
}


class Test {
    public total_count: number;
    public problem_count: number;
    public total_score: number;
    public problem_score: number;
    public current_problem: string;
    public failed_problems: string[];

    constructor(test_name = "", printTests = false) {
        this.total_count = 0
        this.problem_count = 0
        this.total_score = 0
        this.problem_score = 0
        this.current_problem = ""
        this.failed_problems = []
        console.log(`Beginning Test: ${test_name}`)
    }
        
    // Test Helpers
    test(expected_outcome, outcome, case_num) {
        if (expected_outcome == outcome) {
            return this.passed(case_num)
        }
        return this.failed(case_num)
    }
  
    testMultipleCases(possible_outcomes, outcome, case_num) {
        var possible_outcome
        for (possible_outcome of possible_outcomes) {
            if (this.compareArrays(possible_outcome, outcome)) {
                return this.passed(case_num)
            }
        }
        return this.failed(case_num)
    }

    testForArrays(expected_outcome, outcome, case_num) {
        if (this.compareArrays(expected_outcome, outcome)) {
            return this.passed(case_num)
        }
        return this.failed(case_num)
    }

    compareArrays(array1, array2) {
        return array1.length === array2.length && array1.filter((a, i) => Array.isArray(a) ? !this.compareArrays(a, array2[i]) : array2[i] !== a).length === 0;
    }

    testMatchAny(expected_outcome, outcome, case_num) {
        if (this.isEqual(expected_outcome, outcome)) {
            return this.passed(case_num)
        }
        return this.failed(case_num)
    }
  
    isEqual(array1, array2) {
        var sortedArr1: any[] = []
        var sortedArr2: any[] = []
        for (var a1 of array1) {
            sortedArr1.push(a1.sort())
        }
        for (var a2 of array2) {
            sortedArr2.push(a2.sort())
        }
        return this.compareArrays(sortedArr1.sort(), sortedArr2.sort())
    }  
  
    // Test Logistics
    startProblem(problemName) {
        this.current_problem = problemName
        this.problem_score = 0
        this.problem_count = 0
        this.failed_problems = []
    }
    passed(case_num) {
        this.total_score += 1
        this.problem_score += 1
        this.problem_count += 1
        this.total_count += 1
    }
    failed(case_num) {
        this.problem_count += 1
        this.total_count += 1
        this.failed_problems.push(case_num)
    }
    endProblem() {
        console.log(`\n   ${this.current_problem} Score: ${this.problem_score} / ${this.problem_count}`)
        if (this.failed_problems.length > 0) {
            console.log(`   ** Failed Test Cases: ${this.failed_problems}`)
        }
    }
    printFinal() {
        console.log(`\nTotal Score: ${this.total_score} / ${this.total_count}`)
    }
}
        
var test = new Test("")

class ListNode {
    public value: number;
    public next: ListNode | null;

    constructor(value = 0, next = null) {
        this.value = value
        this.next = next
    }
}

function arrayify(head: ListNode) {
    var ptr: ListNode | null = head
    var array: number[] = []
    while (ptr != null) {
        array.push(ptr.value)
        ptr = ptr.next
    }
    return array
}

class TreeNode {
    public value: number;
    public left: TreeNode | null;
    public right: TreeNode | null;

    constructor(value = 0, leftChild: TreeNode | null = null, rightChild: TreeNode | null = null) {
        this.value = value
        this.left = leftChild
        this.right = rightChild
    }
}

function arrayifyTree(root) {
    if (!root) { return [] }
    var queue: TreeNode[] = []
    var array: number[] = []
    queue.push(root)
    while (queue.length !== 0) {
        var node: TreeNode = queue.shift()!
        array.push(node.value)
        if (node.left) { queue.push(node.left) }
        if (node.right) { queue.push(node.right) }
    }
    return array
}

test.startProblem("Print Tree by Level")
test.testForArrays([[1], [2, 3]], printTree(new TreeNode(1, new TreeNode(2), new TreeNode(3))), 1)
test.testForArrays([[2], [29, 4], [26, 2], [9]], printTree(new TreeNode(2, new TreeNode(29, new TreeNode(26)), new TreeNode(4, null, new TreeNode(2, new TreeNode(9))))), 2)
test.testForArrays([[1], [2, 3], [4, 5]], printTree(new TreeNode(1, new TreeNode(2), new TreeNode(3, new TreeNode(4), new TreeNode(5)))), 3)
test.testForArrays([[-3]], printTree(new TreeNode(-3)), 4)
test.endProblem()