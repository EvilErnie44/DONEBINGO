//Controller - controls the sequence of the program.
//The first line of code runs the below functions on the
//event of the window loading.
window.onload = function() {
    //the first function called, generates numbers for the card.
    genCardNum();
    //Then the numbers for the caller.
    genBingoNum();
    //Then the numbers for the card need to be sorted.
    randNumSort();
    //finally once all data is availible in the model, the view
    //changes the DOM to represent the model.
    populateCard();
    //function to populate the card return all of the called numbers.
    document.getElementById("BtnCall").onclick = updateDiv;
}
