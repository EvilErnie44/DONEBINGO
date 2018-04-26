//Model!!! this is to contain anything which directly relates to the data which is going to be used for the card.
// Arrays and data generation methods should all be encapsulated into an object.
// JavaScript source code
var cellNumObj = [];
var cardNum = [];

function newNum() {
return Math.floor((Math.random() * 76) + 1);
}

//create array with random numbers - no dupes.
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

//creates array of random numbers with duplicates
function genRandNum() {
for (i=0; i<24; i++) {
cardNum.push(Math.floor((Math.random() * 76) + 1));
}
}
