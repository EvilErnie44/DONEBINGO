//This version deals solely with the sprint objective of displaying the
//the sequence of numbers for the bingo game in a container.

//Model - this is to contain anything which directly relates to the data which is going to be used for the card.
// Arrays and data generation methods should all be encapsulated into an object.
// JavaScript source code

//The numbers for the caller will be generated and
//then stored in this array object to then be accessed at a later point.
var calledNum = [];
//This function is part of the model.
//It is responsible for the generation of the random number
function newNum() {
//This is the code which returns the product to the
//function when it is called.
return Math.floor((Math.random() * 78) + 1);
}

//This variable is used to assess wether the target container has
//been populated with the sequence of numbers.
var booleanCheck = 0;
//The purpose of this function is to iterate over the cardNum
//number array and assess on the generation of each number
//wether than current number exits in the object.


//Function Declaration.
function genRandNum1() {
//Loop initialisation.
for (var i = 0; i < 78;) {
//Assigning the returned data to the variable.
var n = newNum();
//this conditionial check uses the indexOf() method
//as a means to assess wether the number exists
//already in the array.
if (calledNum.indexOf(n)!== -1) {continue;
  }
  //If number does not exists in the array.
    else {
      //Push the current value of N into the called Num array.
      calledNum.push(n);
      //counter is only incremented when a number is passed into
      //the object.
      i++;
    }
  }
}
