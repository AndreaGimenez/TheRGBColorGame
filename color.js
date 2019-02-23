var numOfSquares = 6 ;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var h1 = document.querySelector("h1");

Init();

function Init(){

    setupModeButtons();
    setupSquaresButtons();
    reset();
}

function setupModeButtons(){
    for( var i = 0 ; i < modeButtons.length ; i++){
        modeButtons[i].addEventListener("click", function(){
            /*remove "selected" from both just to be safe*/
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            //figure out how many squares to show
            this.textContent === "Easy" ? numOfSquares = 3 : numOfSquares = 6;
            reset();
        });
    }
}

function setupSquaresButtons(){
    for(var i = 0; i < squares.length; i++){
        //add click listeners to squares
        squares[i].addEventListener("click", function(){ 
            //grab color of clicked squares
            var clickedColor = this.style.backgroundColor;
            //compare color to pickedColor
            if(clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct";
                changeColor(pickedColor);
                resetButton.textContent = "Play Again?";
                h1.style.backgroundColor = pickedColor;
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}

function reset(){
    colors = randomColors(numOfSquares);
    pickedColor = pickRandomColor();
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    resetButton.textContent = "New colors";
    for(var i = 0; i < squares.length; i++){
        squares[i].style.display = "block";
        if(colors[i]){ 
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function(){
    reset();
});

function changeColor(color){
    for(var i = 0; i < squares.length ; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickRandomColor(){
    var index = Math.floor((Math.random() * colors.length));
    return colors[index];
}

function randomColors(num){
    //crear un array vacio
    var colors = [];
    //iterar num veces
    for(var i = 0 ; i < num ; i++){
        //generar los colores
        colors.push(generateRandomColor());
    }
    //devolver el arrqay
    return colors;
}

function generateRandomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b +")";
}