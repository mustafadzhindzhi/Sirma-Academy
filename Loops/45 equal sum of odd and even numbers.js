//Write a function that accepts two six-digit integers ranging from 100000 to 300000 Always be the first number entered will be less than the second. On the console to print all numbers that are located between the two meeting the following condition:
//the sum of the digits of even and odd position shall be equal.

function solve(firstN, secondN) {
    let result = ``;
    let sumCc = 0;
    let sumNh = 0;
    for (let currNum = firstN + 1; currNum < secondN; currNum++) {

        let num = currNum.toString();
        sumCc = Number(num[0]) + Number(num[2]) + Number(num[4]);
        sumNh = Number(num[1]) + Number(num[3]) + Number(num[5]);
        if (sumCc === sumNh)
            result += `${num} `;

    }
    if (result) {
        console.log(result);
    } else {
        console.log('None');
    }
}
solve(100000, 100050)