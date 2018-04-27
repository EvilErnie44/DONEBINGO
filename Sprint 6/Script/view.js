// JavaScript source code
//I know pass the currentnumber which I am looking for into this
//function.
function updateDiv(num) {

    var container = document.getElementById('usednum');
    //I now only pass in the number to the create text node,
    //as a result of no longer adding a whole array of
    //data into the container on click, the div updates the current num
    //with each click.
    container.appendChild(document.createTextNode(" " + num));
}

function populateCard() {
    for (var x = 0; x < 24; x++) {
        if (x <= 4) {
            var bNum = popBNumber();
            document.getElementById(x).innerHTML = bNum;
        } else if (x <= 9) {
            var iNum = popINumber();
            document.getElementById(x).innerHTML = iNum;
        } else if (x <= 13) {
            var nNum = popNNumber();
            document.getElementById(x).innerHTML = nNum;
        } else if (x <= 18) {
            var gNum = popGNumber();
            document.getElementById(x).innerHTML = gNum;
        } else {
            var oNum = popONumber();
            document.getElementById(x).innerHTML = oNum;
        }
    }
}

//The purpose of this function
function findNumber() {
    //Function returns the current value which needs to be located in the DOM.
    var num = autoNum();
    //Obtains the table object from the HTML mark up .
    var table = document.getElementById("topRow");
    //Variable which dictates the child positon
    var rowIndex = table.children;
    //Function call to pass in the current number obtained.
    updateDiv(num);
    //Nested loop to iterate over each row.
    for (var row = 0; row < rowIndex.length; row++) {
        //Iterator which goes over each element in the row.
        for (var col = 0; col < rowIndex.length; col++) {
            //With each iteration of the nested inner loop I move through the next
            //row position. If the inner html of that current position is equal to the number
            //the code block is executed.
            if (rowIndex[row].children[col].innerHTML == num) {
                //I then invoked the update styles function and pass in the row and col
                //value of current iteration.
                updateStyles(row, col);
                //Check row win function and pass in current iteration value of row.
                checkwinfunction(row);
                //Check col function and pass in the current iteration of col.
                checkColWinFunc(col);
            }
        }
    }
}

//This function is responsible for updating the current targets
//background style.
function updateStyles(row, col) {
    //Assigning the table element to a variable to access below.
    var table = document.getElementById("topRow");
    //Identifies all of the children in the.
    var rowIndex = table.children;
    //This line ensures the row and col which the iteration trigger this function on
    //has the back ground style set to RED.
    rowIndex[row].children[col].style.backgroundColor = "red";
}

function reloadView() {
    location.reload();
}
