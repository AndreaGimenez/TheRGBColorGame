var numOfSquares = 6 ;
var colors = randomColors(numOfSquares);

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var reset = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

var pickedColor = pickRandomColor();
var h1 = document.querySelector("h1");

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	// add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

    //add click listeners to squares
    squares[i].addEventListener("click", function(){ 
		//grab color of clicked squares
		var clickedColor = this.style.backgroundColor;
		//compare color to pickedColor
		if(clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct";
            changeColor(pickedColor);
            reset.textContent = "Play Again?";
            h1.style.backgroundColor = pickedColor;
		} else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
		}
	});
}

reset.addEventListener("click", function(){
    colors = randomColors(numOfSquares);
    pickedColor = pickRandomColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "#232323";
});

easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numOfSquares = 3;
    colors = randomColors(numOfSquares);
    pickedColor = pickRandomColor();
    colorDisplay.textContent = pickedColor;
    h1.style.backgroundColor = "#232323";
    for(var i = 0 ; i < squares.length ; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            console.log("here!");
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numOfSquares = 6;
    h1.style.backgroundColor = "#232323";
    colors = randomColors(numOfSquares);
    pickedColor = pickRandomColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0 ; i < squares.length ; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
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