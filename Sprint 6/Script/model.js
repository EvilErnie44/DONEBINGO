//Model!!!
var cardNum = [];
var bingoNum = [];
var randNumB = [];
var randNumI = [];
var randNumN = [];
var randNumG = [];
var randNumO = [];

//Boolean check for number update has been removed as no longer
//required.

function newNum() {
    return Math.floor((Math.random() * 78) + 1);
}

function autoNum() {
    return bingoNum.pop();
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

function genBingoNum() {

    for (var i = 0; i < 78;) {

        var n = newNum();
        //loop cont
        if (bingoNum.indexOf(n) !== -1) {
            continue;
        } else {
            bingoNum.push(n);
            i++;
        }
    }
}


function genCardNum() {
    for (var c = 0; c < 78;) {
        var o = newNum();
        if (cardNum.indexOf(o) !== -1) {
            continue;
        } else {
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
        } else if (aNumber <= 30) {
            randNumI.push(aNumber);
        } else if (aNumber <= 45) {
            randNumN.push(aNumber);
        } else if (aNumber <= 64) {
            randNumG.push(aNumber);
        } else {
            randNumO.push(aNumber);
        }
    }
}

//Passing in the row value from the Find Number function.
function checkwinfunction(row) {

    var setSquaresRow = 0;
    //passing row in the variable.
    var roweleNum = document.getElementById(row).parentElement.id;
    //passing row in the variable.
    var childRowCollection = document.getElementById(row).parentElement.children;
    //passing row in the variable.
    var roweleLength = document.getElementById(row).parentElement.children.length;

    var strManip = roweleNum.substring(roweleNum.length - 1);

    var parseStr = parseInt(strManip);

    var rowWinner = parseStr + 1;

    for (var x = 0; x < roweleLength; x++) {
        var colour = childRowCollection[x].style.backgroundColor;
        if (colour == "red") {
            setSquaresRow++;
        }
        if (setSquaresRow === 5) {
            alert("You're a winner Barry, You have row " + rowWinner);
            reloadView();
        }
    }
}

//variable which is passed in is determined by the FINDNUMBER LOOP.
function checkColWinFunc(col) {

    var targetTable = document.getElementById("topRow");
    //changed name of variable for better readability.
    var row = targetTable.children;

    var tableLength = targetTable.children.length;

    var winColCounter = 0;

    var colWinner = col + 1;

    for (x = 0; x < tableLength; x++) {
        //The loop logic is the same, I just passed in the col from a result of the
        //loop which assess the target element which the curent number exists in.
        //I then pass the COL variable in when calling this function.
        if (row[x].children[col].style.backgroundColor == "red") {
            winColCounter++;
            if (winColCounter === 5) {
                alert("You're a winner Barry, you have column " + colWinner);
                reloadView();
            }
        }
    }
}
