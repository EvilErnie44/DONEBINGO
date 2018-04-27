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
  var containerFinMessage = document.getElementById("finmessage");
  //string for target container is kept in here as opposed to adding hardcded string
  //into the create text node function.
  var messageStr = "All Numbers Called";
  //Here I check the value of the boolean conditionial
  //which I have set in the model.
    if (executed != true ){
        executed = true;
        //This line appends a child text node to the target element
  //which was assigned to a variable above.
  //Inside that target node, a new text node is created, and the
  //contents of the called number array has the join method applied.
  //With string data to seperate the value of each
  //index value in the array.
        container.appendChild(document.createTextNode(bingoNum.join(", ")));
        //This acts int he same manner as above however, I am simply
//passing a variable which contains the message string into it.
        containerFinMessage.appendChild(document.createTextNode(messageStr));
    }
}

//Function Declaration.
function populateCard() {
    //loop initialisation.
    for (var x = 0; x < 24; x++) {
        //first if statement checks x's current value, this is reflects the
        //target element ID.
        if (x <= 4) {
            //Assigns return of the last value in the target array to the variable to
            //be destributed to target element ID.
            var bNum = popBNumber();
            //string concatination takes places to defined target eles ID.
            //The inner HTML value is then set to represent the data aquired from bNum in model.
            document.getElementById(x).innerHTML = bNum;
            // Else if targets the next group of target element IDs.
        } else if (x <= 9) {
            //If conditional met, then value popped from target array and assigned to variable.
            var iNum = popINumber();
            //string concatination takes places to defined target eles ID.
            //The inner HTML value is then set to represent the data aquired from iNum in model.
            document.getElementById(x).innerHTML = iNum;
            // Else if targets the next group of target element IDs.
        } else if (x <= 13) {
            //If conditional met, then value popped from target array and assigned to variable.
            var nNum = popNNumber();
            //string concatination takes places to defined target eles ID.
            //The inner HTML value is then set to represent the data aquired from nNum in model.
            document.getElementById(x).innerHTML = nNum;
            // Else if targets the next group of target element IDs.
        } else if (x <= 18) {
            //If conditional met, then value popped from target array and assigned to variable.
            var gNum = popGNumber();
            //string concatination takes places to defined target eles ID.
            //The inner HTML value is then set to represent the data aquired from gNum in model.
            document.getElementById(x).innerHTML = gNum;
            //final else statement requires no form of conditonal check as by this point all other
            //possible outcomes have been assessed.
        } else {
            //Variable is assigned with the last item from the oNum array.
            var oNum = popONumber();
            //string concatination takes places to defined target eles ID.
            //The inner HTML value is then set to represent the data aquired from gNum in model.
            document.getElementById( x).innerHTML = oNum;
        }
    }
}

//Binding the on click event which updates the target ID's style.
function bindOnClickEvent() {
  //loop initialisation.
  for (var x = 0; x < 24 ; x++){
    //iterating over all of the target element IDs and binding the update styles function to be run on click.
    document.getElementById(x).onclick = updateStyles;
  }
}

// function declaration
function updateStyles(e) {
  //conditional check to assess the background color of the current event target ID.
  if (this.style.backgroundColor != "red"){
    //if the backgroundColor is not equal to red, set the BG color.
   this.style.backgroundColor = "red";
     }
     //The else statement removes the changed colour on alternating clicks.
   else {
     //setting background color propertty to be empty.
  this.style.backgroundColor = "";
   }
  //passing in the target ID in to the check win function to check win function as to be accessed for win condition check.
  checkwinfunction(e.target.id);
 //column win condition check, passing in event target as so I can access the targets Cell Index.
  checkColWinFunc(e.target);
}

//This function is responsible for reloading the view once the winning
//condition has been met.
function reloadView() {
    location.reload();
}
