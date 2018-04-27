//Model!!! this is to contain anything which directly relates to the data which is going to be used for the card.
// Arrays and data generation methods should all be encapsulated into an object.
// JavaScript source code

//Global Array Declaration
//The numbers for the card will be generated and then stored in
//this object to then be accessed at a later point.
var cardNum = [];
//This function is part of the model.
//It is responsible for the generation of the random number
function newNum() {
//This line of code returns the product of the statement to t
//function when called later in the application.
return Math.floor((Math.random() * 76) + 1);
}

/*
//The purpose of this function is to iterate over the cardNum
//number array and assess on the generation of each number
//wether than current number exits in the object.
function genRandNum() {
  //loop needs changing into function.
for (i=0; i<24;) {
//This makes a call to generate a random number with each iteration of the loop.
  newNum();
//loop cont
if (cardNum.indexOf(newNum)!== -1) {continue;
  }
    else {
      cardNum.push(newNum);
      i++;
    }
  }
}
*/

/*
//creates array of random numbers with duplicates.
function genRandNum() {
for (i=0; i<24; i++) {
cardNum.push(Math.floor((Math.random() * 76) + 1));
}
}*/
