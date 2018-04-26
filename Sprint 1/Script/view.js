// JavaScript source code
function bingoCard1() {
for (var i=0; i<24; i++) {
document.getElementById("square"+i).innerHTML = newNum();
}
}

function reloadView() {
    location.reload();
}
