function jediArchivesSearch(arr, string) {
    let firstOccurrence = 0;
    let lastOccurence = 0;
    let isFound = false;

    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] === string) {
            if (!isFound) {
                firstOccurrence = i;
                isFound = true;
            };
            lastOccurence = i;
        }
    }
    if (isFound) {
        console.log(`First Occurrence: ${firstOccurrence}`);
        console.log(`Last Occurrence: ${lastOccurence}`);
    } else {
        console.log('Record not found');
    }
};

jediArchivesSearch(["Yoda", "Obi-Wan", "Yoda", "Luke"], "Yoda");
jediArchivesSearch(["Han", "Leia", "Chewbacca", "Han"], "Han");
jediArchivesSearch(["Lando", "Vader", "Palpatine"], "Maul");
jediArchivesSearch(["Yoda", "Obi-Wan", "Anakin","Luke"], "Luke");