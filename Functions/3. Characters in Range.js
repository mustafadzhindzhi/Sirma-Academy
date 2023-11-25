function charactersInRange(char1, char2) {
    const startCharCode = char1.charCodeAt(0);
    const endCharCode = char2.charCodeAt(0);

    let result = '';
    for (let charCode = startCharCode + 1; charCode < endCharCode; charCode++) {
        result += String.fromCharCode(charCode);
    }

    console.log(result);
}
charactersInRange('#', ':')