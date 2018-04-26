// JavaScript source code

function updateDiv() {

  if (booleanCheck!=1) {

  booleanCheck++;

  var container = document.getElementById('usednum');
  var containerFinMessage = document.getElementById("finmessage");

  //Append
  container.appendChild(document.createTextNode(bingoNum.join(", ")));
  //Show steve weird behaviour.
  containerFinMessage.appendChild(document.createTextNode("All Numbers Called"));
 }
}

function populateCard() {
  for (var x=0; x<24; x++) {
    if (x <= 4) {
      var bNum = popBNumber();
      document.getElementById("square"+x).innerHTML = bNum;
    } else if(x<=9) {
      var iNum = popINumber();
      document.getElementById("square"+x).innerHTML = iNum;
    } else if (x<=13){
      var nNum = popNNumber();
      document.getElementById("square"+x).innerHTML = nNum;
    } else if (x<= 18){
      var gNum = popGNumber();
      document.getElementById("square"+x).innerHTML = gNum;
    } else {
      var oNum = popONumber();
      document.getElementById("square"+x).innerHTML = oNum;
    }
    }
}
