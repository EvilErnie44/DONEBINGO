// JavaScript source cod//Controller - controls the use of the events.
window.onload = function () {
genBingoNum();
genCardNum();
randNumSort();
populateCard();
document.getElementById("reload").onclick = populateCard;
document.getElementById("BtnCall").onclick = updateDiv;
bindOnClickEvent();
}
