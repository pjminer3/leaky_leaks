function checkArithmeticExpressions(operandOne: number[], operator: string[], operandTwo: number[], result: number[]): boolean[] {
    function addition(a: number, b: number) {
        return a + b;
    }

    function subtraction(a: number, b:number) {
        return a - b;
    }

    function multiplication(a: number, b: number) {
        return a*b;
    }

    function division(a: number, b: number) {
        return Math.round(a / b);
    }

    const solution: boolean[] = [];

    const operatorMap = new Map();

    operatorMap.set("+", addition);
    operatorMap.set("-", subtraction);
    operatorMap.set("*", multiplication);
    operatorMap.set("/", division);

    for (let i = 0; i < operandOne.length; i++) {
        solution.push(operatorMap.get(operator[i])(operandOne[i], operandTwo[i]) === result[i]);
    }

    return solution;
}

