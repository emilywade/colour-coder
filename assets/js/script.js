// define the list of colours that the game will contain
let colours = ['#ffc700', '#7fffd4', '#0000ff', '#822b54', '#ff1493', '#00ff00']

// define function to duplicate this list
function duplicateElements(arr) {
    return arr.flatMap(item => [item, item]);
}

// duplicate each element in the original list
let duplicatedColours = duplicateElements(colours);

// randomly sort the duplicated list
let shuffledColours = duplicatedColours.sort(() => Math.random() - 0.5);

// store length of list
let colourCount = shuffledColours.length;

// game play
for (let i=0; i<colourCount; i++) {
    let card = document.createElement('div')
    card.className = 'card'
    card.style.backgroundColor = shuffledColours[i]

    card.onclick = function() {
        this.classList.add('flipped')
        setTimeout(function(){
            if(document.querySelectorAll('.flipped').length > 1){
                let flippedOne = document.querySelectorAll('.flipped')[0];
                let flippedTwo = document.querySelectorAll('.flipped')[1];
    
                let bgColorOne = window.getComputedStyle(flippedOne).backgroundColor;
                let bgColorTwo = window.getComputedStyle(flippedTwo).backgroundColor;
    
                // console.log(bgColorOne);
                // console.log(bgColorTwo);
    
                if(bgColorOne == bgColorTwo){
                    document.querySelectorAll('.flipped')[0].classList.add('cardMatch')
                    document.querySelectorAll('.flipped')[1].classList.add('cardMatch')
                    
                    document.querySelectorAll('.flipped')[1].classList.remove('flipped')
                    document.querySelectorAll('.flipped')[0].classList.remove('flipped')
    
                    if(document.querySelectorAll('.cardMatch').length == colourCount){
                        alert('win message');
                    }
                } else {
                    document.querySelectorAll('.flipped')[1].classList.remove('flipped')
                    document.querySelectorAll('.flipped')[0].classList.remove('flipped')
                }
            }
        },500)   
    }

    document.querySelector('.game').appendChild(card);
}

// reload game function
function reloadGame() {
    window.location.reload()
}