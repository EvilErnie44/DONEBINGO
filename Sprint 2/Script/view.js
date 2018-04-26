// JavaScript source code

function updateDiv() {
  //Append
  var container = document.getElementById('usednum');
  var containerFinMessage = document.getElementById("finmessage");
  container.appendChild(document.createTextNode(cardNum.join(", ")));
  finmessage.appendChild(document.createTextNode("All Numbers Called"));
}
