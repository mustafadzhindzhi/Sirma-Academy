function oddEvenSum(n) {
    const numbers = n.toString();
    let sumOdd = 0;
    let sumEven = 0;

    for (let i = 0; i < numbers.length; i++) {
        const digit = parseInt(numbers[i]);
        console.log(digit);
        if (digit % 2 === 0) {
            sumEven += digit;
        } else {
            sumOdd += digit;
        }
    };
  
    console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);
};

oddEvenSum(1000435)