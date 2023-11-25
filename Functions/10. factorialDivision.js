function factorialDivision(numA, numB) {
    const firstNum = calcFactorial(numA);
    const secondNum = calcFactorial(numB);

    console.log((firstNum / secondNum).toFixed(2));

    function calcFactorial(num) {
        let res = 1;
        for (let i = num; i > 1; i -= 2) {
            res *= i * (i - 1);
        };
        return res;
    }
};
factorialDivision(5, 2)