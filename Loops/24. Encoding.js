/*Write a program that receive an integer. On the console should be printed as many lines
as there are digits in the number. Each line is formed from the digits of the reversed
number. A symbol must be printed on each line with the following conditions:*/

function solve(n) {
    const numStr = n.toString();
    const reversedNumStr = numStr.split('').reverse().join('');

    for (let i = 0; i < reversedNumStr.length; i++) {
        const digit = reversedNumStr.charAt(i);
        const asciiCode = parseInt(digit) + 33;

        if (digit == 0) {
            console.log('ZERO');
        } else {
            const symbol = String.fromCharCode(asciiCode).repeat(parseInt(digit));
            console.log(symbol);
        }
    }
}

solve(2049)