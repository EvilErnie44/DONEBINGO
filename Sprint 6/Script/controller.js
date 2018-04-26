// JavaScript source cod//Controller - controls the use of the events.
window.onload = function () {
genBingoNum();
genCardNum();
randNumSort();
populateCard();
document.getElementById("BtnCall").onclick = findNumber;
updateStyles();
document.getElementById("reload").onclick = reloadView;
}
