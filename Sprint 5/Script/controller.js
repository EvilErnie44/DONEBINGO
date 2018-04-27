//Controller - controls the sequence of the program.
//The first line of code runs the below functions on the
//event of the window loading.
window.onload = function () {
  //generate all bingo numbers.
  genBingoNum();
  //generate the numbers for the card.
  genCardNum();
  //sort card numbers before distribution.
  randNumSort();
  //distribute numbers too target card Ids.
  populateCard();
  //binds on click style change via iteration.
  bindOnClickEvent();
  //Update contents of the called numbers container. 
  document.getElementById("BtnCall").onclick = updateDiv;
}
