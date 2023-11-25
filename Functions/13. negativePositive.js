function negativePositive(arr) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            result.unshift(arr[i])
        } else {
            result.push(arr[i])
        }
    };
    return result;
};
console.log(negativePositive([7, -2, 8, 9]))