function reorganizeString(s: string) {
    if (s.length === 1) return s;
    
    const solution: string[] = [];
    const characterCounts: Map<string, number> = new Map<string, number>();
    const charLimit = Math.ceil(s.length / 2);

    for (let char of s) {
        let newCount = characterCounts.has(char) ? characterCounts.get(char)! + 1 : 1;
        characterCounts.set(char, newCount);
        
        if (newCount > charLimit) return "";
    }

    const charCountPairs = Array.from(characterCounts.entries());
    sortKeyValuePairsDescending(charCountPairs);
    let loop = true;

    while (loop) {
        let first = charCountPairs[0][1] !== 0 ? charCountPairs[0][0] : ""
        let second = charCountPairs[1][1] !== 0 ? charCountPairs[1][0] : "";

        solution.push(first);
        if (second !== "") solution.push(second);

        charCountPairs[0][1]--;
        charCountPairs[1][1]--;

        sortKeyValuePairsDescending(charCountPairs);
        if (charCountPairs[0][1] === 0) {
            loop = false;
        }
    }

    return solution.join("");
};

function sortKeyValuePairsDescending(array: [any, any][]) {
    return array.sort((a, b) => b[1] - a[1]);
}