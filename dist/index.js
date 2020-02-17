var numSquares = 6;
var colors = [];
var pickedColor;
var modeButtons = document.querySelectorAll(".mode")
var newColors = document.querySelector("#newColor");
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var displayStatus = document.querySelector("#status")
var jumbotron = document.querySelector(".jumbotron")


init();

function init() {
    // mode buttons
    setUpModeButton();
    setUpSquareButton();
    reset();
}

function setUpModeButton() {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function() {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            
            // figure out how many sqaures to show
            // pick new colors
            // pick a new pickedColor
            // update page to refelct changes
            this.textContent === "EASY" ? numSquares = 3 : numSquares = 6;
            reset();
        })
    }
}

function setUpSquareButton() {
    for (var i = 0; i < squares.length; i++) {
        // add click event to squares
        squares[i].addEventListener("click", function() {
            // grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            // compare color to pickedColor
            if (clickedColor === pickedColor) {
                displayStatus.textContent = "Correct!"
                changeColors(clickedColor);
                jumbotron.style.backgroundColor = clickedColor;
                newColors.textContent = "Play Again?"
            } else {
                this.style.backgroundColor = "#232323"
                displayStatus.textContent = "Try Again"
            }
        })
    }
}

function changeColors(color) {
    // loop through all squares
    for (var i = 0; i < squares.length; i++) {
        // change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length)
    return colors[random];
}

function generateRandomColors(num) {
    // make an array
    var arr = []

    // repeat num times
    for (var i = 0; i < num; i++) {
        // get random color and push into arr
        arr.push(randomColor())
    }

    // return that array
    return arr
}

function randomColor() {
    // pick a "red" from 0 - 255
    var r = Math.floor(Math.random() * 256);

    // pick a "green" from 0 - 255
    var g = Math.floor(Math.random() * 256);

    // pick a "blue" from 0 - 255
    var b = Math.floor(Math.random() * 256);
    
    return `rgb(${r}, ${g}, ${b})`;
}

newColors.addEventListener("click", function() {
    reset();
});

function reset() {
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    newColors.textContent = "NEW COLORS"
    displayStatus.textContent = ""
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";            
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";

        }
    }
    jumbotron.style.backgroundColor = "steelblue" 
}