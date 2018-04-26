// JavaScript source code

function updateDiv() {

    if (executed != true ){
        executed = true; 
        //Append
        var container = document.getElementById('usednum');
        var containerFinMessage = document.getElementById("finmessage");

        container.appendChild(document.createTextNode(bingoNum.join(", ")));
          //Show steve weird behaviour.
        containerFinMessage.appendChild(document.createTextNode("All Numbers Called"));
        
    }
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

function bindOnClickEvent() {
  for (var x = 0; x < 24 ; x++){
    document.getElementById(x).onclick = updateStyles;
  }
}

function updateStyles(e) {
  alert("U clicked me");
  var winMark = 1;
  var remMark = 0;
  if (this.style.backgroundColor != "red"){
   this.style.backgroundColor = "red";
     }
   else {
  this.style.backgroundColor = "";
   }
  //passing in the target ID to check win function as to be accessed for win condition check. 
  checkwinfunction(e.target.id);
 //column win condition check, passing in event target as so I can access the targets Cell Index. 
  checkColWinFunc(e.target); 
}

function reloadView() {
    location.reload();
}