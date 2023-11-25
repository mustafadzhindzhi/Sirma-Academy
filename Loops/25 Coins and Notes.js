/*We have banknotes and coins of 1lv., 2lv. and 5lv. Write a program that receives number
of banknotes and coins and the target amount and displays all possible ways in which the
amount can be paid with the available money.*/

function solve(coins1lv, coins2lv, banknote, finalSum) {
    let sum = 0;
    for (let i = 0; i <= coins1lv; i++) {
        for (let j = 0; j <= coins2lv; j++) {
            for (let k = 0; k <= banknote; k++) {
                sum = coins1lv + coins2lv * 2 + banknote * 5;
                if (sum === finalSum) {
                    console.log(`${coins1lv} * 1lv. + ${coins2lv} * 2lv. +${banknote} * 5lv. = ${sum}lv.`);
                }
            }
        }
    }
}

solve(3, 2, 3, 10)