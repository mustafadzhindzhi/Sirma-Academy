function sithCodeChiper(s, n) {
    if (s.length < 1 || s.length > 100) {
        throw new Error('Input string length should be between 1 and 100 characters.');
    }
    if (n < 1 || n > 25) {
        throw new Error('Shift amount should be between 1 and 25.');
    };

    const myResult = [];

    for (let i = 0; i < s.length; i++) {
        const char = s.charAt(i);

        if (/[a-zA-Z]/.test(char)) {
            const isUpperCase = (char === char.toUpperCase());
            const charCode = char.charCodeAt(0);
            const baseCharCode = isUpperCase ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);

            const newCharCode = ((charCode - baseCharCode - n + 26) % 26) + baseCharCode;

            myResult.push(String.fromCharCode(newCharCode));
        } else {
            myResult.push(char);
        }
    }
    return myResult.join('');
}

console.log(sithCodeChiper("R2-D2", 4));