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
var booleanCheck = 0;

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
