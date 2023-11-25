function galacticVotes(votes) {
    let yesCount = 0;
    let noCount = 0;

    for (let i = 0; i < votes.length; i++) {
        const vote = votes[i];

        if (vote === "Yes") {
            yesCount++;
        } else if (vote === "No") {
            noCount++;
        }
    }

    if (yesCount === 0 && noCount === 0) {
        console.log("Abstain");
    } else if (yesCount === noCount) {
        console.log("Tie");
    } else if (yesCount > noCount) {
        console.log("Yes");
    } else if (noCount > yesCount) {
        console.log("No");
    } else {
        console.log("Abstain");
    }
}

galacticVotes(["Yes", "No", "Yes", "Abstain", "Yes"])
galacticVotes(["No", "No", "Abstain", "Abstain"]);
galacticVotes(["Yes", "No"]);
galacticVotes(["Abstain"]);
galacticVotes(["No", "No", "Abstain", "Abstain", "Yes", "Yes"]);