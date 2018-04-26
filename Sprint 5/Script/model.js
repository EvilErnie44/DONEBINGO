//Model!!! this is to contain anything which directly relates to the data which is going to be used for the card.
// Arrays and data generation methods should all be encapsulated into an object.
// JavaScript source code
var cardNum = [];
var bingoNum = [];
var randNumB = [];
var randNumI = [];
var randNumN = [];
var randNumG = [];
var randNumO = [];

var executed = false; 

function newNum() {
return Math.floor((Math.random() * 78) + 1);
}

function popBNumber() {
return randNumB.pop();
}

function popINumber() {
  return randNumI.pop();
}

function popNNumber() {
  return randNumN.pop();
}

function popGNumber() {
  return randNumG.pop();
}

function popONumber() {
  return randNumO.pop();
}

//create array with random numbers - no dupes. This is for the caller Numbers
//As numbers are RNG their is no need to shuffle array when done this way.
function genBingoNum() {
  //loop needs changing into function.
for (var i = 0; i < 78;) {
//This makes a call to generate a random number with each iteration of the loop.
var n = newNum();
//loop cont
if (bingoNum.indexOf(n)!== -1) {continue;
  }
    else {
      bingoNum.push(n);
      i++;
    }
  }
}

//calls function
//Purpose to generate 18 ints for bingo card, these again are random and will produce all ints
//req as RNG. As a result no need to shuffle the array.
function genCardNum() {
  //loop needs changing into function.
for (var c = 0; c < 78;) {
//This makes a call to generate a random number with each iteration of the loop.
var o = newNum();
//if statement is checking the arr to ensure the number has not already been generated,if the number has an index which exists then
//the loop continues.
if (cardNum.indexOf(o)!== -1) {continue;
  }
    else {
      cardNum.push(o);
      c++;
    }
  }
}


function randNumSort() {

  for (var j = 0; j < 78; j++) {
    var aNumber = cardNum.pop();
     if (aNumber <= 15) {
       randNumB.push(aNumber);
     }
       else if (aNumber <= 30) {
         randNumI.push(aNumber);
       }
        else if (aNumber <= 45){
        randNumN.push(aNumber);
        }
          else if (aNumber <= 64) {
            randNumG.push(aNumber);
          }
          else {
            randNumO.push(aNumber);
          }
        }
      }

//function to check win condition
function checkwinfunction(target) {
    
var winningOption = -1;
var setSquaresRow = 0;   

//Targets parent of the event id clicked used to target row and column. 
var roweleNum = document.getElementById(target).parentElement.id;
//Targets row of children to iterate over.
var childRowCollection = document.getElementById(target).parentElement.children;
//Maximum legnth of iteration scope.
var roweleLength = document.getElementById(target).parentElement.children.length; 

//   
var strManip = roweleNum.substring(roweleNum.length - 1);
    
var parseStr = parseInt(strManip);
    
var rowWinner = parseStr + 1; 
    
    //need to obtain last charecter in substrin of this element. 
console.log(rowWinner);     


for (var x = 0; x < roweleLength; x++) {
var colour = childRowCollection[x].style.backgroundColor;
if (colour == "red") {
  setSquaresRow++;
}
    if(setSquaresRow===5){
        alert("You're a winner Barry, You have row " + rowWinner); 
        reloadView();  
    }
}
 /*
  var element = childCollection.item(target);
  var colour = element.style.backgroundColor;
  console.log(element.style.backgroundColor);
 */
    
    //for loop to check columns
    //Get target click Index, target topRow.children.length
    //Iterate over only the single position targetted on click
    //Increment table children counter. 
    //console log background style. 
    //whilx x less than table length
}

function checkColWinFunc(target) {
    //Unable to declare in function, Is this due to event object being passed in?
    var targetTable = document.getElementById("topRow"); 
    //collection of TR elements which I iterate over in the below for loop. 
    var row = targetTable.children; 
    //Targets the cell index which will be used to target the TR index which I will iterate over. 
    var colIndex = target.cellIndex; 
    //Declaring length property in a variable as to set maximum scope for iteration.
    var tableLength = targetTable.children.length;
    //Setting win condition counter to 0.
    var winRowCounter = 0
    
    var colWinner = colIndex + 1; 
    
    //Unable to declare in function, Is this due to event object being passed in?
var targetTable = document.getElementById("topRow"); 
//collection of TR elements which I iterate over in the below for loop. 
var row = targetTable.children; 

    //ROW should start at 0 so we are in the first TR
      for (x = 0; x < tableLength ;x++){ 
          // If statement accesses the background style property of the cell index passed into the 
          //colindex variable when the event target is assigned. As a result, I only assess the rows target index on each iteration 
          //over the parent tables rows. 
         if(row[x].children[colIndex].style.backgroundColor == "red"){
             winRowCounter++; 
                 if (winRowCounter === 5){
                     alert("You're a winner Barry, you have column " + colWinner);
                     //Calling function to reload the page which affects view, as a result the function is located in view. 
                     reloadView(); 
                 }
             }
         }
}


