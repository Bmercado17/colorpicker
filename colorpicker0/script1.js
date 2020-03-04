var numOfSquares = 6;
var colors = generateRandomColors(numOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var difficultBtn = document.querySelector("#difficultBtn");

//EASY MODE WITH THREE SQUARES
easyBtn.addEventListener("click", function(){
  difficultBtn.classList.remove("selected");
  easyBtn.classList.add("selected");
  numOfSquares = 3;
  colors = generateRandomColors(numOfSquares);
  pickerdColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(var i = 0; i < squares.length; i++){
    if(colors[i]){
      squares[i].style.background = colors[i];
    }else{
      squares[i].style.display = "none";
    }
  }
});
//DIFFICULT OR HARD MODE
difficultBtn.addEventListener("click", function(){
  difficultBtn.classList.remove("selected");
  easyBtn.classList.add("selected");
  numOfSquares = 6;
  colors = generateRandomColors(numOfSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(var i = 0; i < squares.length; i++){
    squares[i].style.background = colors[i];
    squares[i].style.display = "block";
    }
});
//RESET BUTTON
resetButton.addEventListener("click", function(){
  //when click on this button, we generate new colors, and start the game
  colors = generateRandomColors(numOfSquares);
  //change the colors of the squares
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(var i = 0; i < squares.length; i++){
    squares[i].style.background = colors[i];
  }
  h1.style.background = "gray";
})

for(var i = 0; i < squares.length; i++){
  //add initial colors to squares
  squares[i].style.backgroundColor = colors[i];
  //add click listener to squares(REMEMBER THE IMPORTANT OF THE TEXT 'CAPITOLS')
  squares[i].addEventListener("click", function(){
  //grab color of clicked square and compare to clickedColor
  var clickedColor = this.style.backgroundColor;
  if(clickedColor === pickedColor){
    messageDisplay.textContent = "correct!";
    resetButton.textContent = "Play Again?";
    changeColors(clickedColor);
    h1.style.background = clickedColor;
  }else{
    this.style.backgroundColor = "orange";
    messageDisplay.textContent = "Try Again"
  }
  });
}
function changeColors(color){
  //loop through so when we get the right answer
  //all the squares change colors to the correct colors
  for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = color;
  }
}
function pickColor (){
var random = Math.floor(Math.random() * colors.length);
return colors[random];
};
function generateRandomColors(num){
  //make an array, add num random colors to arr, return that array
  var arr = []
  for (var i = 0; i < num; i++){
    //get random color and push into the array
arr.push(randomColor())
    }
  return arr;

  }
function randomColor(){
//pick red from 0 to 255, green from 0 to 255 and blue from 0 to 255
//256 because the highest density of color goes to 255;
var r = Math.floor(Math.random()* 256);
var g = Math.floor(Math.random()* 256);
var b = Math.floor(Math.random()* 256);
// "rgb(r, g, b,)"
return "rgb(" + r + ", " + g + ", " + b + ")";
}
