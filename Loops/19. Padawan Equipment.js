function solve(moneyAmount, studentsCount, sabresPrice, robesPrice, beltPrice) {
    let count = 0;
    let sum = 0;
    for (let i = 0; i <= studentsCount; i++) {
        count++
        if (count == 6) [
            beltPrice = 0
        ];
        sum = sabresPrice * (studentsCount * 1.1) + robesPrice * (studentsCount) + beltPrice * (studentsCount * 1.1);
    };
    let finalSum = Math.ceil(sum);
    let difference = finalSum - moneyAmount;

    if (sum <= moneyAmount) {
        console.log(`The money is enough - it would coust ${finalSum.toFixed(2)}lv.`);
    } else {
        console.log(`George Lucal will need ${difference}lv. more`);
    }
};

solve(100, 42, 12, 4, 3)
solve(100, 2, 1, 2, 3)