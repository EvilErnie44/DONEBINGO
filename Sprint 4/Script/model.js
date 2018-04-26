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

var booleanCheck = 0

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
