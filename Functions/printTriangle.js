function triangle(n) {
    let str = '';

    if(n < 1) {
        printLine('Invalid range')
    };

    for (let i = 1; i < n * 2; i++) {
        if (i > n) { 
            str = str.slice(0, -1);
        } else {
            str += i;
        }
        printLine(str);
    };

    function printLine(str) {
        console.log(str);
    }
};
triangle(0)