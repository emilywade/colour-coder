// define the list of colours that the game will contain
let colours = ['#00FFFF', '#7FFFD4', '#0000FF', '#8A2BE2', '#7FFF00', '#FF1493']

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

