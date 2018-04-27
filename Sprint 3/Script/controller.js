//Controller - controls the flow of the program.
//The first line of code runs the below functions on the
//event of the window loading.
//It defines the sequence in which the functions will be ran.
window.onload = function () {
//the first function called, generates numbers for the card.
genCardNum();
//Then the numbers for the caller.
genBingoNum();
//Then the numbers from the cardarray are allocated to the bingoCard.
populateCard();
//This line binds the on click event to invoke function call to the target elements ID.
document.getElementById("BtnCall").onclick = updateDiv;
}
