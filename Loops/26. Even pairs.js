function solve(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

function generateNumbers(initial1, initial2, diff1, diff2) {
    for (let i = initial1; i <= 97; i += diff1) {
        if (solve(i) && i + diff1 <= 97) {
            for (let j = initial2; j <= 97; j += diff2) {
                if (solve(j) && j + diff2 <= 97) {
                    const number = `${i}${j}`;
                    console.log(number);
                }
            }
        }
    }
};

solve(10, 20, 5, 5)