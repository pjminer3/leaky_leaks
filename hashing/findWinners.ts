

function findWinners(matches: number[][]): number[][] {
    return new MatchMaker(matches).findWinners();
};


type ScoreRecord = [number, number];
class MatchMaker {
    matches: number[][]

    constructor(matches: number[][]) {
        this.matches = matches;
    }

    findWinners(): number[][] {
        const scores: Map<number, ScoreRecord> = new Map();
        let min = Infinity;
        let max = -Infinity;

        const solution: number[][] = [[], []]

        for (let match of this.matches) {
            const [winner, loser] = match;
            min = Math.min(winner, loser, min);
            max = Math.max(winner, loser, max);
            scores.set(winner, scores.get(winner) || [0, 0]);
            scores.set(loser, scores.get(loser) || [0, 0]);
            (scores.get(winner) as ScoreRecord)[0]++;
            (scores.get(loser) as ScoreRecord)[1]++
        }

        for (let i = min; i <= max; i++) {
            let scoreboard = scores.get(i);
            if (scoreboard) {
                if (scoreboard[1] < 2) [
                    solution[scoreboard[1]].push(i);
                ]
            }
        }

        return solution;
    }
}