function findCircleNum(isConnected: number[][]): number {
    if (isConnected.length === 0) {
        return 0;
    }
    
    const seen: Set<number> = new Set();
    let count = 0;
    const dfsStack: number[] = [];

    for (let i = 0; i < isConnected.length; i++) {
        if (seen.has(i)) continue;
        seen.add(i);
        count++;
        dfsStack.push(i);

        while (dfsStack.length) {
            let node: number = dfsStack.pop()!;
            let connections = isConnected[node];

            for (let j = 0; j < connections.length; j++) {
                if (seen.has(j) || !isConnected[i][j]) continue;
                seen.add(j);
                if (isConnected[i][j]) dfsStack.push(j);
            }
        }
    }

    return count;
};
