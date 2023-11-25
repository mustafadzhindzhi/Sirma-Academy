function findLongestAndShortestWords(sentence) {
    const words = sentence.split(/\s+|[.,!?]/).filter(word => word !== ''); 

    if (words.length === 0) {
        console.log('No valid words found.');
    }

    let shortest = words[0];
    let longest = words[0];

    for (const word of words) { 
        if (word.length < shortest.length) {
            shortest = word;
        } else if (word.length > longest.length) {
            longest = word;
        }
    };
    
    console.log('Longest ->', longest);
    console.log('Shortest ->', shortest);
};

findLongestAndShortestWords('Hello how are you today? I hope you are fine')



