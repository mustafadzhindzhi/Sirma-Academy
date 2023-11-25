function isPalindrome(number) {
    const numberString = number.toString(); 
    const reversedString = numberString.split('').reverse().join(''); 
    return numberString === reversedString; 

}
function palindromeNumbers(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (isPalindrome(arr[i])) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}

palindromeNumbers([123, 323, 421, 121])