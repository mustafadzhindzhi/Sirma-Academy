function progressBar(number) {
    const totalDots = 10;
    const filledDots = Math.floor((number / 100) * totalDots);

    let progressBarStr = '';

    if (filledDots < totalDots) {
        progressBarStr = `${number}% [`;
        for (let i = 0; i < totalDots; i++) {
            if (i < filledDots) {
                progressBarStr += '%';
            } else {
                progressBarStr += '.';
            }
        }
        progressBarStr += ']';
        console.log(progressBarStr);
        console.log("Loading...");
    } else {
        progressBarStr = '[';
        for (let i = 0; i < totalDots; i++) {
            progressBarStr += '%';
        }
        progressBarStr += ']';
        console.log(progressBarStr);
        console.log("Complete!");
    }
}

progressBar(50);