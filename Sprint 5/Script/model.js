//Model!!! this is to contain anything which directly relates to the data which is going to be used for the card.
// Arrays and data generation methods should all be encapsulated.
// JavaScript source code.

//Array for values of cardNum to be passed into.
var cardNum = [];
//Array to contain the numbers for the bingo caller.
var bingoNum = [];
//Array which will contain the first set of bingo numbers once sorted.
var randNumB = [];
//Array which will contain the second set of bingo numbers once sorted.
var randNumI = [];
//Array which will contain the third set of bingo numbers once sorted.
var randNumN = [];
//Array which will contain the fourth set of bingo numbers once sorted.
var randNumG = [];
//Array which will contain the fifth set of bingo numbers once sorted.
var randNumO = [];

//Here I check the value of the boolean conditional
//which I have set in the model as it models the functions
//behaviour.
var executed = false;

//function declaration.
function newNum() {
    //This is the code which returns the product to the
    //function when it is called.
    //this function is used by both array population functions.
    return Math.floor((Math.random() * 78) + 1);
}

//function declaration.
function popBNumber() {
    //utilise the array pop method to return the last element of the
    //target array.
    return randNumB.pop();
}

//function declaration.
function popINumber() {
    //utilise the array pop method to return the last element of the
    //target array.
    return randNumI.pop();
}

//function declaration.
function popNNumber() {
    //utilise the array pop method to return the last element of the
    //target array.
    return randNumN.pop();
}

//function declaration.
function popGNumber() {
    //utilise the array pop method to return the last element of the
    //target array.
    return randNumG.pop();
}

//function declaration.
function popONumber() {
    //utilise the array pop method to return the last element of the
    //target array.
    return randNumO.pop();
}

//function declaration
//The purpose of the function is ensure the product of N does not already exist in the array.
//It also means I do not need to shuffer the array as they are no added linearly.
function genBingoNum() {
    //Loop Initialisation.
    for (var i = 0; i < 78;) {
        //Assigning the returned data to the variable with each iteration.
        var n = newNum();
        //this conditionial check uses the indexOf() method
        //as a means to assess wether the number exists
        //already in the array, if it already exists the loop does not increment and is started again.
        if (bingoNum.indexOf(n) !== -1) {
            continue;
        }
        //If number does not exists in the array.
        //Push the current value of N into the bingoNum array.
        else {
            bingoNum.push(n);
            //increment the loop.
            i++;
        }
    }
}

//Populate cardNum array with random numbers
//and duplicates do not get added to the array.
function genCardNum() {
    //Loop initialisation.
    for (var c = 0; c < 78;) {
        //Assigning the returned data to the variable.
        var o = newNum();
        //this conditionial check uses the indexOf() method
        //as a means to assess wether the number exists
        //already in the array.
        if (cardNum.indexOf(o) !== -1) {
            continue;
        }
        //If number does not exists in the array.
        //Push the current value of o into the called Num array.
        else {
            cardNum.push(o);
            //counter is only incremented when a number is passed into
            //the object.
            c++;
        }
    }
}

//The purpose of this function is to sort the numbers inside of the cardNum array and
//then place them in the target array which will only contain numbers in the same scope.
//Again, due to the values being past into the original array in a non linear manner
//I do not have to shuffle the contents.

function randNumSort() {
    //loop initialisation.
    for (var j = 0; j < 78; j++) {
        //assigins the last value in cardNum to a variable to be assessed.
        var aNumber = cardNum.pop();
        //conditional check, if current number is less than equal to comparison.
        if (aNumber <= 15) {
            //pass the value into the array for B-NUMBERS.
            randNumB.push(aNumber);
        } //conditional check, if current number is less than equal to comparison.
        else if (aNumber <= 30) {
            //pass the value into the array for I-NUMBERS.
            randNumI.push(aNumber);
        } //conditional check, if current number is less than equal to comparison.
        else if (aNumber <= 45) {
            //pass the value into the array for N-NUMBERS.
            randNumN.push(aNumber);
        } //conditional check, if current number is less than equal to comparison
        else if (aNumber <= 64) {
            //pass the value into the array for G-NUMBERS.
            randNumG.push(aNumber);
        } //No conditional required at this point as all other thresholds have been assesed.
        else {
            //push the value into the array for O-NUMBERS.
            randNumO.push(aNumber);
        }
    }
}

//function to check if the row win conditon has been met.
function checkwinfunction(target) {
//initialisation of variable which counts how close the view is to a
//win.
var setSquaresRow = 0;
//Targets parent of the event id clicked used to target row and column.
var roweleNum = document.getElementById(target).parentElement.id;
//Targets row of children to iterate over.
var childRowCollection = document.getElementById(target).parentElement.children;
//Maximum legnth of iteration scope is assess via obtaining length of children collection.
var roweleLength = document.getElementById(target).parentElement.children.length;
//manipulates the string as to leave only the last digit.
var strManip = roweleNum.substring(roweleNum.length - 1);
//parse int to pass into string for winning message.
var parseStr = parseInt(strManip);
//offset the integer value so user is not presented with 0 values for row.
var rowWinner = parseStr + 1;

//for loop initialation.
for (var x = 0; x < roweleLength; x++) {
//assinging target property to value to be assessed on the relevant iteration.
//The functions walks over the target rows back ground style from 0-4 linearly.
var colour = childRowCollection[x].style.backgroundColor;
//assing the background colour with conditional check.
if (colour == "red") {
  // if the conditional requirements are met, then increment the
  //counter by 1.
  setSquaresRow++;
}
    //nested IF will check with each iteration if the winning criteria has been met.
    if(setSquaresRow===5){
      //winning message alert to be presented when winning conditon met.
        alert("You're a winner Barry, You have row " + rowWinner);
        //Once game is one and mesage appears, reload the page.
        //contet of function belongs in view.
        reloadView();
    }
}

}

//function which checks wether the a column win has been reached.
function checkColWinFunc(target) {
    //Decalre target table by element ID. Iterable target.
    var targetTable = document.getElementById("topRow");
    //collection of TR elements which I iterate over in the below for loop.
    var row = targetTable.children;
    //Targets the cell index which will be used to target the TR index which I will iterate over.
    //Essential the cell index is used to ascertain what column is to be checked.
    var colIndex = target.cellIndex;
    //Declaring length property in a variable as too set maximum scope for iteration.
    var tableLength = targetTable.children.length;
    //Setting win condition counter to 0.
    var winRowCounter = 0
    //offset the col counter as to present correct column to user.
    var colWinner = colIndex + 1;
    //iteration of row is set to 0 as to ensure I start assessing table the at the top of the row.
      for (x = 0; x < tableLength ;x++){
          // If statement accesses the background style property of the cell index passed into the
          //colindex variable when the event target cell id is passed into this function.
          //As a result, I only assess the rows target index on each iteration.
         if(row[x].children[colIndex].style.backgroundColor == "red"){
           //increment row counter only when background style has met conditonal check.
             winRowCounter++;
             //Check to see if the winning counter reaches the desired win total.
                 if (winRowCounter === 5){
                   //Alert user that they have won along with passing in the offset column value.
                     alert("You're a winner Barry, you have column " + colWinner);
                     //Once win has been met calling function to reload the page which affects view, as a result the function is located in view.
                     reloadView();
                 }
             }
         }
}
