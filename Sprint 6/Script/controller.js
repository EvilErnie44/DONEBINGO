//As discussed, I have only annotated the changes.
window.onload = function() {
    genBingoNum();
    genCardNum();
    randNumSort();
    populateCard();
    //assinging the find number function an associated on click event.
    document.getElementById("BtnCall").onclick = findNumber;
}
