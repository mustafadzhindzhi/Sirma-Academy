function smallestNum(a, b, c) {
    const smallestT = Math.min(a, b, c);
    console.log(smallestT);

    const arr = Array.from(arguments);
    const smallest = arr.sort((a, b) => a - b);
    console.log(smallest[0]);
};
smallestNum(2, 5, 3)