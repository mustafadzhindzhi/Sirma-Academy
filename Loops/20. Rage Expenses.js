function solve(lostGames, headsetPrice, mousePrice, keyboardPrice, displayPrice) {
    let trashedHeadset = Math.floor(lostGames / 2);
    let trashedMouse = Math.floor(lostGames / 3);
    let trashedKeyboard = Math.floor(lostGames / 6);
    let trashedDisplay = Math.floor(trashedKeyboard / 2);

    let headSetExpense = trashedHeadset * headsetPrice;
    let mouseExpense = trashedMouse * mousePrice;
    let keyboardExpense = trashedKeyboard * keyboardPrice;
    let displayExpense = trashedDisplay * displayPrice;

    let totalExpenses = headSetExpense + mouseExpense + keyboardExpense + displayExpense;
    console.log(`Rage expenses: ${totalExpenses} lv.`);
}

solve(7, 2, 3, 4, 5);