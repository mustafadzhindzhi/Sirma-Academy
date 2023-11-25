//write a function that takes an integer n and prints a pyramid of numbers as in the exmaples

function pyramidOfNumbers(n) {
    let currentNumber = 1;
    // External loop
    for (let i = 1; currentNumber <= n; i++) {
        let string = '';
        // Internal loop
        for (let j = 1; j <= i; j++) {
            if(currentNumber > n) {
                break;
            }
            string += currentNumber + '';
            currentNumber++;
        };
        console.log(string);
    }
}
pyramidOfNumbers(7)

// 1
// 23
// 456
// 7