//Model!!! this is to contain anything which directly relates to the data which is going to be used for the card.
// Arrays and data generation methods should all be encapsulated
// JavaScript source code

//Array for the card numbers to be passed into.
var cardNum = [];
//Array for the bingo numbers to placed into.
var bingoNum = [];
//Here I check the value of the boolean conditional
//which I have set in the model as it models the functions
//behaviour.
var booleanCheck = 0;
//This is the code which returns the product to the
//function when it is called.
function newNum() {
//This is the code which returns the product to the
//function when it is called.
//this function is used by both array population functions.
return Math.floor((Math.random() * 78) + 1);
}

//Populate cardNum array with random numbers
//and duplicates do not get added to the array.
//this means I do not need to shuffle the arrays.
function genCardNum() {
//Loop initialisation.
for (var i = 0; i < 78;) {
//Assigning the returned data to the variable.
var n = newNum();
//this conditionial check uses the indexOf() method
//as a means to assess wether the number exists
//already in the array.
if (cardNum.indexOf(n)!== -1) {continue;
  }
  //If number does not exists in the array.
  //Push the current value of N into the called Num array.
    else {
      cardNum.push(n);
      //counter is only incremented when a number is passed into
      //the object.
      i++;
    }
  }
}

//As a foot note to the above function, I generate 78 numbers
//as I will be sorting them with the next sprint. This way,
//I do not need to shuffle array objects and all possible numbers
//which are inside scope are generated.

//function declaration
//Like the above function this performs the same role however
//the numbers are allocated to the bingoNum array.
function genBingoNum() {
  //Loop initialisation.
  for (var c = 0; c < 78;) {
  //Assigning the returned data to the variable with each iteration.
  var num = newNum();
  //this conditionial check uses the indexOf() method
  //as a means to assess wether the number exists
  //already in the array.
  if (bingoNum.indexOf(num)!== -1) {continue;
    }
    //If number does not exists in the array.
    //Push the current value of Num into the bingoNum array.
    //already in the array, if it already exists the loop does not increment and is started again.
      else {
        bingoNum.push(num);
        //counter is only incremented when a number is passed into
        //the object.
        c++;
      }
    }
}
