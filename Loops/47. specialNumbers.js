// Write a function that takes an integer n and generates all possible "special" numbers from 1111 to 9999. For a number to be 'special', it must meet the following condition

function specialNumbers(n) {
    let result = '';

    for (let currentNum = 1111; currentNum <= 9999; currentNum++) {

        let currentNumStr = currentNum.toString();
        let isSpecial = true;

        for (let index = 0; index < currentNumStr.length; index++) {
            let currentDigit = Number(currentNumStr[index]); // за да намериш текущата цифра влез в currentNumStr и ми дай символа на позиция индекс

            if (n % currentDigit !== 0) { // 3 дели ли се на числото в момента без остатък
                isSpecial = false;
                break;
            }
        };
        if (isSpecial == true) {
            result += `${currentNumStr} `;
        }
    };
    console.log(result);
};

specialNumbers(3)