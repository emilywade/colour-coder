// define the list of colours that the game will contain
let colours = ['#ffc700', '#7fffd4', '#0000ff', '#822b54', '#ff1493', '#00ff00'];

// define function to duplicate this list
function duplicateElements(arr) {
    return arr.flatMap(item => [item, item]);
}

// define function to randomly sort the duplicated list
function shuffleColours(arr) {
    return arr.sort(() => Math.random() - 0.5);
}

// define function to create cards
function createCards(colourArray) {
    let colourCount = colourArray.length;
    let gameContainer = document.querySelector('.game');

    for (let i=0; i<colourCount; i++) {
        let card = document.createElement('div');
        card.className = 'card';
        card.style.backgroundColor = colourArray[i];
        card.onclick = handleCardClick;
        gameContainer.appendChild(card);
    }
}

// define function to handle card click 
function handleCardClick() {
    this.classList.add('flipped');
    setTimeout(checkForMatch, 500);
}

// define function to check for card match
function checkForMatch() {
    let flippedCards = document.querySelectorAll('.flipped');
    if (flippedCards.length > 1) {
        let bgColorOne = window.getComputedStyle(flippedCards[0]).backgroundColor;
        let bgColorTwo = window.getComputedStyle(flippedCards[1]).backgroundColor;

        if (bgColorOne === bgColorTwo) {
            flippedCards.forEach(card => card.classList.add('cardMatch'));
            flippedCards.forEach(card => card.classList.remove('flipped'));

            if (document.querySelectorAll('.cardMatch').length === colours.length * 2) {
                alert("Congratulations! You are a Colour Coder! :)");
            }
        } else {
            flippedCards.forEach(card => card.classList.remove('flipped'));
        }
    }
}


// define reload game function
function reloadGame() {
    window.location.reload();
}

// define function to initialise game 
function initialiseGame() {
    let duplicatedColours = duplicateElements(colours);
    let shuffledColours = shuffleColours(duplicatedColours);
    createCards(shuffledColours);
}

initialiseGame();