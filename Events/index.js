const redBox = document.querySelector('.red-box');

/*redBox.onclick = function(event) {
    console.log(event);
}

redBox.addEventListener('click', function(event) {
    console.log('You clicked the box');
},{
    once:true, 
    capture: false,
    passive:true
})

function changeBGToBlue(event) {
    this.style.background = 'Blue';
    console.log('you can chamged the color to blue!');
};

redBox.addEventListener('click', changeBGToBlue);

redBox.removeEventListener('click', changeBGToBlue);

console.log({redBox}); 
*/

/*
redBox.addEventListener('mouseover', function(event) {
    console.log(event);
});
redBox.addEventListener('keyup', function(event) {
    console.log(event);
});

const testInput = document.querySelector('#test');

testInput.addEventListener('mouseover', function(event) {
    console.log(event);
});
testInput.addEventListener('keyup', function(event) {
    console.log(event);
});
*/

/*const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
})
*/

/*const div = document.querySelector('div');
const p = div.querySelector('p');
div.addEventListener('click', function(e) {
    console.log(e);
})
p.addEventListener('click', function(e) {
    console.log(e);
}) */

/*const container = document.querySelector('.container');
container.addEventListener('mouseover', function(event) {
    const target = event.target;

    if(target.classList.contains('item')) {
        // target.classList.toggle('highlight')
        target.style.background = `#${Math.floor(Math.random()*1600000).toString(16)}`;
    }
})
*/

// const form = document.querySelector('form');
// const placeholderContainer = document.querySelector('div.placeholder');
// const attemptsPlaceholder = document.querySelector('div.attempts span');
// const correctLettersContainer = document.querySelector('div.correct-letters p.correct');

// const wrongLettersContainer = document.querySelector('div.wrong-letters p.wrong');

// let hiddenWord = '';
// let attemptCount = 0;
// const questLetters = [];

// // const words = ['Hello', 'Submit', 'Events', 'Someone'];

// // const word = words[Math.floor(Math.random() * words.length)];
// // console.log(word);

// form.addEventListener('submit', function (event) {
//     event.preventDefault();
//     hiddenWord = this.querySelector('#hiddenword').value;

//     this.querySelector('input[type="submit"]').disabled = true;
//     setPlaceHolder(hiddenWord);
// })

// function setPlaceHolder(word) {
//     for (let char of word) {
//         const placeholder = document.createElement('span');
//         placeholder.textContent = '_';
//         placeholderContainer.append(placeholder);
//         document.body.addEventListener('keypress', handleKeyPress)
//     }
// };

// //функция за натискане на бутони от клавиатурата
// function handleKeyPress(event) {
//     const { keyCode, key } = event;
//     if (!(keyCode >= 97 && keyCode <= 122)) {
//         alert('Invalid letter');
//         return;
//     }
//     if (questLetters.includes(key)) {
//         alert('letter already used');
//         return;
//     };
//     questLetters.push(key);
//     if (hiddenWord.includes(key)) {
//         //unravel the possition of the letter
//         correctLettersContainer.append(key);
//         const placeHolders = placeholderContainer.querySelectorAll('span');
//         for (let i = 0; i < hiddenWord.length; i++) {
//             if (key === hiddenWord[i]) {
//                 placeHolders[i].textContent = key;
//             }
//         }
//     } else {
//         //add the letter to the wrong quested list
//         wrongLettersContainer.append(key);
//         attemptCount++;
//         attemptsPlaceholder.textContent = attemptCount;
//     };
//     checkProgress();
// };

// function checkProgress() {
//     if (attemptCount === 8) {
//         alert('You lost the word was: ' + hiddenWord);
//         document.body.removeEventListener('keypress', handleKeyPress);
//         return;
//     };
//     const placeHolders = Array.from(placeholderContainer.querySelectorAll('span'));
//     const letterLeft = placeHolders.filter(item => item.textContent === "_")
//     if (letterLeft.length === 0) {
//         alert('you guessed correctly the word was: ' + hiddenWord);
//     }
// }
