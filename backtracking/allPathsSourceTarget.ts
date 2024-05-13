function allPathsSourceTarget(graph: number[][]): number[][] {
    const solution: number[][] = [];
    
    function backtrack(currentPath: number[], potentialNextStep: number[], visitedNodes: Set<number>): undefined {
        if (currentPath[currentPath.length - 1] === graph.length - 1) {
            solution.push([...currentPath]);
            return;
        }

        for (let nextStep of potentialNextStep) {
            if (visitedNodes.has(nextStep)) {
                continue;
            }

            currentPath.push(nextStep);
            visitedNodes.add(nextStep);
            backtrack(currentPath, graph[nextStep], visitedNodes);

            currentPath.pop();
            visitedNodes.delete(nextStep);
        }
    }

    let vistedNodes = new Set([0]);
    
    backtrack([0], graph[0], vistedNodes);
    
    return solution;
};