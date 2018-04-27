//View - responsible for any code which result in the DOM
//being changed.

//The purpose of this function is to update the view/presentation
// of the HTML DOM elements which it targets.
//AS a result of this, it belongs in the view.
//Function Declaration.
function updateDiv() {
  //Assigning target element to variable.
  var container = document.getElementById('usednum');
  //Assigning target element to variable.
  var finMessage = document.getElementById("finmessage");
  var messageStr = "All Numbers Called";
  //Here I check the value of the boolean conditionial
  //which I have set in the model.
  if (booleanCheck === 0){
  //Only when this function is ran do we increment the conditionial
  //check value as to ensure it does not the application
  //runs this function more than once.
  booleanCheck++;
  //This line appends a child text node to the target element
  //which was assigned to a variable above.
  //Inside that target node, a new text node is created, and the
  //contents of the called number array has the join method applied.
  //With string data to seperate the value of each
  //index value in the array.
  container.appendChild(document.createTextNode(calledNum.join(", ")));
  //This acts int he same manner as above however, I am simply
  //passing a variable which contains the message string into it.
  finMessage.appendChild(document.createTextNode(messageStr));
}
}
