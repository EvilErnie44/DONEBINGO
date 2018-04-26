// JavaScript source code

function updateDiv(num) {
//Boolean check to ensure that if the function has been already ran it is not executed again
        var container = document.getElementById('usednum');
        var containerFinMessage = document.getElementById("finmessage");
        container.appendChild(document.createTextNode(" "+num));
        
    }

function populateCard() {
  for (var x=0; x<24; x++) {
    if (x <= 4) {
      var bNum = popBNumber();
      document.getElementById(x).innerHTML = bNum;
    } else if(x<=9) {
      var iNum = popINumber();
      document.getElementById(x).innerHTML = iNum;
    } else if (x<=13){
      var nNum = popNNumber();
      document.getElementById(x).innerHTML = nNum;
    } else if (x<= 18){
      var gNum = popGNumber();
      document.getElementById(x).innerHTML = gNum;
    } else {
      var oNum = popONumber();
      document.getElementById(x).innerHTML = oNum;
    }
    }
}

function findNumber() {
    var num = autoNum();

    var table = document.getElementById("topRow");

    var rowIndex = table.children;

    var found = 0;
    
    updateDiv(num); 

    for (var row = 0; row < rowIndex.length; row++) {
        for (var col = 0; col < rowIndex.length; col++) {
            if (rowIndex[row].children[col].innerHTML == num) {
                updateStyles(row, col); 
                //Check row
                //Check Col
            }
        }
    }
}


function updateStyles(row, col) {

    var table = document.getElementById("topRow");

    var rowIndex = table.children;

    var found = 0;
    
    rowIndex[row].children[col].style.backgroundColor = "red";
    
}

function reloadView() {
    location.reload();
}