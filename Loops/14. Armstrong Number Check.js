function solve(n) {
    let numStr = n.toString(); 
    let length = numStr.length;
    let sum = 0;
    let isPalindrome = false;

    for (let i = 0; i < length; i++) {
        const digit = parseInt(numStr[i]); 
        sum += Math.pow(digit, length); 
    };

    if (sum == n) {
        isPalindrome = true; 
        
    }
    console.log(isPalindrome);
};
solve(123)